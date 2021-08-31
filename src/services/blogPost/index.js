import express from "express"
import product from "./handlers.js"
import lib from '../../lib/index.js'
import multer from "multer"
const {cloudStorage} = lib



const router = express.Router()

router
  .route("/")
  .get(product.getAll)

router
  .route("/")
  .post(product.create)

// router
//   .route("")
//   .get(product.getByCategory)

router
  .route("/:blogPostID")
  .get(product.getSingle)
//   .put(product.update)
//   .delete(product.deleteSingle)

// router
//   .route("/")
//   .put(multer({ storage: cloudStorage }).single('image'), product.uploadProdImg)
  
export default router
