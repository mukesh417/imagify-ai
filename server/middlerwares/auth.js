
import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  const { token } = req.headers;
  console.log("🧠 Received token:", token);

  if (!token) {
    return res.json({ success: false, message: 'Not Authorized. Login Again' });
  }

  try {
    const tokenDecode = jwt.verify(token.trim(), process.env.JWT_SECRET);
    console.log("✅ Token decoded:", tokenDecode);

    // ✅ Ensure req.body always exists
    if (!req.body) req.body = {};
    req.body.userId = tokenDecode.id;

    next();
  } catch (error) {
    console.log("❌ JWT error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

export default userAuth;
