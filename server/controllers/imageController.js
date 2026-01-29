import axios from "axios";
import userModel from "../models/userModel.js";

const generateImage = async (req, res) => {
  try {
    // ✅ userId auth middleware se aa raha hai
    const userId = req.userId;
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    // ✅ user find karo
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    // ✅ credit check
    if (user.creditBalance <= 0) {
      return res.status(401).json({
        success: false,
        message: "No credits left",
        creditBalance: 0,
      });
    }

    // =========================
    // CALL CLIPDROP API
    // =========================
    const response = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      { prompt },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    // image buffer to base64
    const base64Image = Buffer.from(response.data).toString("base64");
    const imageUrl = `data:image/png;base64,${base64Image}`;

    // =========================
    // UPDATE USER CREDITS
    // =========================
    user.creditBalance = user.creditBalance - 1;
    await user.save();

    // =========================
    // RESPONSE
    // =========================
    res.json({
      success: true,
      resultImage: imageUrl,
      credits: user.creditBalance,
    });

  } catch (error) {
    console.error("❌ Generate Image Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Image generation failed",
    });
  }
};

export { generateImage };
