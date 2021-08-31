const searchHasResults = async (req, res, next) => {
    try {
        if(res.body.length === 0){
            res.status(404).send({msg: 'Not found'})
        } else {
            res.status(200).send(res.body)
        }
    } catch (error) {
        next(error)
    }
}

const responseValidations = {
    searchHasResults: searchHasResults
}

export default responseValidations