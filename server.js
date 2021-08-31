import express from "express"
import cors from "cors"
import productRouter from "./src/services/products/index.js"
import lib from "./src/lib/index.js"


const {errorHandlers, serverConfig} = lib


const server = express()
const { PORT } = process.env

server.use(express.json())
server.use(cors(serverConfig))

server.use("/product", productRouter)







server.use(errorHandlers.forbidden)
server.use(errorHandlers.notFound)
server.use(errorHandlers.badRequest)
server.use(errorHandlers.server)






server.listen(PORT, async () => {
  console.log("🚀 Server is running on port ", PORT)
})

server.on("error", (error) =>
  console.log("🚀 Server is crashed due to ", error)
)

