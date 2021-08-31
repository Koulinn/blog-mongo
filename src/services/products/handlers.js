const getAll = async (req, res, next) => {
  try {
 
  } catch (error) {
    console.log(error)
    next(error)
  }
}
const getSingle = async (req, res, next) => {
  try {

  } catch (error) {
    console.log(error)
    next(error)
  }
}

const create = async (req, res, next) => {
  try {

  } catch (error) {
    console.log(error)
    next(error)
  }
}

const update = async (req, res, next) => {
  try {


  } catch (error) {
    console.log(error)
    next(error)
  }
}

const deleteSingle = async (req, res, next) => {
  try {

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


const product = {
  create: create,
  getAll: getAll,
  getSingle: getSingle,
  update: update,
  deleteSingle: deleteSingle,
  getByCategory: getByCategory,
  uploadProdImg: uploadProdImg
}

export default product