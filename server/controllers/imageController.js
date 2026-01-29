import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

export const generateImage = async (req, res) => {
  try {
    const userId = req.userId;        // ✅ FROM AUTH
    const { prompt } = req.body;

    if (!prompt) {
      return res.json({ success: false, message: "Prompt missing" });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "No credits left",
        creditBalance: 0
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    const response = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API
        },
        responseType: "arraybuffer"
      }
    );

    const base64Image = Buffer.from(response.data).toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    user.creditBalance -= 1;
    await user.save();

    res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance
    });

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Image generation failed" });
  }
};
