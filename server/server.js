// import express, { json } from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/mongodb.js'
// import userRouter from './routes/userRoutes.js'
// import imageRouter from './routes/imageRoutes.js'


// const PORT = process.env.PORT || 4000
// const app = express()

// app.use(cors())
// app.use(express.json())
// // app.use(cors())
// await connectDB()

// app.use('/api/user',userRouter)
// app.use('/api/image',imageRouter)
// app.get('/',(req,res)=>res.send("API Working "))
// app.listen(PORT,()=>console.log(`Server running on port ${PORT} `))
// ===========================================================================================
// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/mongodb.js'
// import userRouter from './routes/userRoutes.js'
// import imageRouter from './routes/imageRoutes.js'

// const PORT = process.env.PORT || 4000
// const app = express()

// // ✅ VERY IMPORTANT: allow custom headers
// app.use(cors({
//   origin: "*",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "token", "Authorization"]
// }))

// app.use(express.json())

// await connectDB()

// app.use('/api/user', userRouter)
// app.use('/api/image', imageRouter)

// app.get('/', (req, res) => res.send("API Working"))

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

// ===============================================================================
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000
const app = express()

// ✅ FINAL CORS CONFIG (PRODUCTION SAFE)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "token", "Authorization"],
  credentials: true
}))

// ✅ Allow preflight for all routes
app.options("*", cors())

app.use(express.json())

await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('/', (req, res) => {
  res.send("API Working")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
