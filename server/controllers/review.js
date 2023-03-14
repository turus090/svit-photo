const ReviewModel = require('../Models/Review')

module.exports.Create = async (req, res) => {
    console.log(req.body)
let newReview = new ReviewModel ({
    name: req.body.name,
    text: req.body.text,
    stars: req.body.stars,
    dateCreated: new Date()
})

await newReview.save()
.then (() => res.status(200).json('New Review created'))
.catch (err => res.status(500).json(err))  
}
module.exports.List = async (req, res) => {
const reviewList = await ReviewModel.find({})
if (reviewList){
    res.status(200).json(reviewList)
    } else {
        res.status(404).json('Not Found')
}
}