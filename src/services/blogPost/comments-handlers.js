import BlogPost from "../../db/models/BlogPost.js"
import aqp from 'api-query-params';


const getCommentsFromBlog = async (req, res, next) => {
  try {

    const blogs = await BlogPost.findById(req.params.blogPostID)
    res.send(blogs.blogComments)

  } catch (error) {
    res.status(500)
    res.status(500)
    next(error)
  }
}
const getSingleComment = async (req, res, next) => {
  try {
    const { blogPostID, commentID } = req.params
    const comment = await BlogPost.findOne(
      { "blogComments._id": req.params.commentID },
      {
        "blogComments.$": 1,
        "_id": 0 //suppress blogID
      }
    )
    res.status(200).send(comment)
  } catch (error) {
    res.status(500)
    console.log(error)
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const addComment = await BlogPost.findByIdAndUpdate(
      req.params.blogPostID,
      { $push: { blogComments: req.body } },
      { new: true }
    )

    console.log(addComment)
    res.status(200).send(addComment)
  } catch (error) {
    res.status(500)
    console.log(error)
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const blogPostID = req.params.blogPostID

    const updatedBlogPost = await BlogPost.findByIdAndUpdate(blogPostID, req.body, {
      new: true
    })

    res.send(updatedBlogPost)
  } catch (error) {
    res.status(500)
    console.log(error)
    next(error)
  }
}

const deleteSingle = async (req, res, next) => {
  try {
    const blogPostID = req.params.blogPostID

    const DbRes = await BlogPost.findByIdAndDelete(blogPostID)

    if (DbRes)
      res.status(204).send()

  } catch (error) {
    res.status(500)
    console.log(error)
    next(error)
  }
}

const getByCategory = async (req, res, next) => {
  try {

  } catch (error) {
    res.status(500)
    console.log(error)
    next(error)
  }
}


const uploadProdImg = async (req, res, next) => {
  try {

  } catch (error) {
    res.status(500)
    console.log(error)
    next(error)
  }

}


const blogComments = {
  create: create,
  getCommentsFromBlog: getCommentsFromBlog,
  getSingleComment: getSingleComment,
  update: update,
  deleteSingle: deleteSingle,
  getByCategory: getByCategory
}

export default blogComments