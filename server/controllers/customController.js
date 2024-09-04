const Review = require("../models/customModel");

const createReview = async (req, res) => {
    req.body.image = req.file.filename
    try {
        const newCustome = new Review(req.body)
        // console.log(newCustome)
        await newCustome.save()
        return res.status(200).json({
            message: "Successfully inserted!"
        })
    } catch {
        res.status('400').json({ error: 'error saving data' })
    }
}

const getReviews = async (req, res) => {
    const review = await Review.find({});
    res.status(200).json(review);
};

const getReviewByID = async (req, res) => {
    const review = await Review.findById(req.params.id);
    if (review) {
        res.status(200).json(review);
    } else {
        res.status(404).json({ error: "review not found" });
    }
};

const deleteCustom = async (req, res) => {
    try {
        let result = await Review.deleteOne({ _id: req.params.cusid })
        let data = await Review.find()
        res.json(data)
    } catch (err) {
        return res.status(400).json({ error: err })
    }
}

module.exports = { createReview, getReviews, getReviewByID, deleteCustom };
