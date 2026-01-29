
// import jwt from 'jsonwebtoken';

// const userAuth = async (req, res, next) => {
//   const { token } = req.headers;
//   console.log("🧠 Received token:", token);

//   if (!token) {
//     return res.json({ success: false, message: 'Not Authorized. Login Again' });
//   }

//   try {
//     const tokenDecode = jwt.verify(token.trim(), process.env.JWT_SECRET);
//     console.log("✅ Token decoded:", tokenDecode);

//     // ✅ Ensure req.body always exists
//     if (!req.body) req.body = {};
//     req.body.userId = tokenDecode.id;

//     next();
//   } catch (error) {
//     console.log("❌ JWT error:", error.message);
//     res.json({ success: false, message: error.message });
//   }
// };

// export default userAuth;


// =======================================================
// import jwt from "jsonwebtoken";

// const userAuth = async (req, res, next) => {
//   // ✅ token safely read from headers
//   const token =
//     req.headers.token ||
//     req.headers.authorization?.split(" ")[1];

//   console.log("🧠 Received token:", token);

//   if (!token) {
//     return res
//       .status(401)
//       .json({ success: false, message: "Not Authorized. Login Again" });
//   }

//   try {
//     const tokenDecode = jwt.verify(token.trim(), process.env.JWT_SECRET);

//     if (!req.body) req.body = {};
//     req.body.userId = tokenDecode.id;

//     next();
//   } catch (error) {
//     console.log("❌ JWT error:", error.message);
//     return res
//       .status(401)
//       .json({ success: false, message: "Invalid or Expired Token" });
//   }
// };

// export default userAuth;
// ==================================================================================
import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {

  // ✅ VERY IMPORTANT: allow CORS preflight
  if (req.method === "OPTIONS") {
    return next();
  }

  // ✅ Read token safely
  const token =
    req.headers.token ||
    req.headers.authorization?.split(" ")[1];

  console.log("🧠 Received token:", token);

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not Authorized. Login Again"
    });
  }

  try {
    const decoded = jwt.verify(token.trim(), process.env.JWT_SECRET);

    // ensure req.body exists
    if (!req.body) req.body = {};
    req.body.userId = decoded.id;

    next();
  } catch (error) {
    console.log("❌ JWT error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token"
    });
  }
};

export default userAuth;
