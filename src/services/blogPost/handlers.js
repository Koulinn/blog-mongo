import BlogPost from "../../db/models/BlogPost.js"


const getAll = async (req, res, next) => {
  try {
    const blogs = await BlogPost.find({})
 
    res.status(200).send(blogs)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
const getSingle = async (req, res, next) => {
  try {
    const blogPostID = req.params.blogPostID
    const blog = await BlogPost.findById(blogPostID)

    if(blog){
      res.status(200).send(blog)

    } else{
      res.status(404).next()
    }
    

  } catch (error) {
    console.log(error)
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const newBlogPost = new BlogPost(req.body)
    const DbRes = await newBlogPost.save()

    res.status(204).send(DbRes)
  } catch (error) {
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
    console.log(error)
    next(error)
  }
}

const deleteSingle = async (req, res, next) => {
  try {
    const blogPostID = req.params.blogPostID

    const DbRes = await BlogPost.findByIdAndDelete(blogPostID)

    if(DbRes)
    res.status(204).send()

  } catch (error) {
    console.log(error)
    next(error)
  }
}

const getByCategory = async (req, res, next) => {
  try {

  } catch (error) {
    console.log(error)
    next(error)
  }
}


const uploadProdImg = async (req, res, next) => {
  try {
  
  } catch (error) {
    console.log(error)
    next(error)
  }

}


const blogPost = {
  create: create,
  getAll: getAll,
  getSingle: getSingle,
  update: update,
  deleteSingle: deleteSingle,
  getByCategory: getByCategory,
  uploadProdImg: uploadProdImg
}

export default blogPost