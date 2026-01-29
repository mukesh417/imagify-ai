import jwt from "jsonwebtoken";

const userAuth = (req, res, next) => {

  // allow CORS preflight
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Authorization header missing"
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ IMPORTANT FIX
    req.userId = decoded.id;   // NOT req.body

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });
  }
};

export default userAuth;
