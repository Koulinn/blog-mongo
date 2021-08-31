import BlogPost from "../../db/models/BlogPost.js"


const getAll = async (req, res, next) => {
  try {
  
    if(Object.keys(req.query).length != 0){
      const blogs = await BlogPost.find({...req.query})
      res.body = blogs
      next()
    } else {
      const blogs = await BlogPost.find({})
      res.body = blogs
      next()
    }   
  } catch (error) {
    res.status(500)
    res.status(500)
    next(error)
  }
}
const getSingle = async (req, res, next) => {
  try {
    const blogPostID = req.params.blogPostID
    const blog = await BlogPost.findById(blogPostID)
    res.body = blog

    if(blog){
      next()

    } else{
      next()
    }
  } catch (error) {
    res.status(500)
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

    if(DbRes)
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