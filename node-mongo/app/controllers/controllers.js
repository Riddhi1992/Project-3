const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)
const Review = mongoose.model('Reviews');

const createList = async (req, res) => {
    const {title, res_review} = req.body
    const review = new Review({title, res_review})
    // Save Inventory in the MongoDB
    review.save()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Fail!!!',
                error: error.message
            })
        })
}

const getList = async (req, res) => {
    const {id} = req.params
    Review.findById(id)
        .select('-__v')
        .then((review) => {
            res.status(200).json(review)
        })
        .catch((err) => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Review not found with id ' + id,
                    error: err
                })
            }
            return res.status(500).send({
                message: 'Error retrieving review with id ' + id,
                error: err
            })
        })
}

const lists = async (req, res) => {
    Review.find()
        .select('-__v')
        .then((reviews) => {
            return res.status(200).json(reviews)
        })
        .catch((err) => {
            console.log({err})

            return res.status(500).json({
                message: 'Error!!!',
                error: err
            })
        })
}

const deleteList = async (req, res) => {
    const {id} = req.params
    Review.findByIdAndDelete(id, (err, review) => {
        if (err) {
            res.status(500).json({
                message: 'Error -> Can\'t delete review with id =' + id,
                error: err
            })
        }
        if (!review) {
            return res.status(404).json({
                message: 'No review found with id = ' + id,
                error: "404"
            })
        }
        return res.status(200).json({})
    })
}

const updateList = async (req, res) => {
    const {_id, title, res_review} = req.body
    // Find Inventory and update it
    Review.findOneAndUpdate({_id:_id}, {title, res_review}, {new: false})
        .then((review) => {
            console.log({review})
            if (!review) {
                return res.status(404).json({
                    message: 'Can\'t update review with id =' + id,
                    error: "Not Found"
                })
            }
            res.status(200).json(review)
        })
        .catch((err) => {
            return res.status(500).json({
                message: 'Error -> Can\'t update review with id =' + id,
                error: err
            })
        })

}

module.exports = {
    createList,
    getList,
    lists,
    updateList,
    deleteList
}
