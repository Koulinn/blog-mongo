import BlogPost from "../../db/models/BlogPost.js"
import aqp from 'api-query-params';


const getAll = async (req, res, next) => {
  try {

  
    if(Object.keys(req.query).length != 0){

      const parsedQuery =  aqp(req._parsedUrl.query)
      const {filter, limit, sort} = parsedQuery
      console.log(filter)
      
      const blogs = await BlogPost.find(filter).limit(limit).sort(sort)
      res.body = blogs
      next()
    } else {
      console.log('elseeeee')
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
    const DbRes = await newBlogPost.save({new: true})

    res.status(200).send(DbRes)
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


const uploadBlogCover = async (req, res, next) => {
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
  uploadBlogCover: uploadBlogCover
}

export default blogPost