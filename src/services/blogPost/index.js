import express from "express"
import blogPost from "./handlers.js"
import lib from '../../lib/index.js'
import responseValidations from "../../lib/response-validations.js"
import multer from "multer"
const {cloudStorage} = lib



const router = express.Router()

router
  .route("/")
  .get(blogPost.getAll, responseValidations.searchHasResults)

router
  .route("/")
  .post(blogPost.create)

// router
//   .route("")
//   .get(blogPost.getByCategory)

router
  .route("/:blogPostID")
  .get(blogPost.getSingle, responseValidations.searchHasResults)
  .put(blogPost.update)
  .delete(blogPost.deleteSingle)

// router
//   .route("/")
//   .put(multer({ storage: cloudStorage }).single('image'), blogPost.uploadProdImg)
  
export default router
