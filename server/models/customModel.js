const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    type: {
        type: String
    },
    name: {
        type: String,
        require: true
    },
    position: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    }

}, {
    timestamps: true
}
);

const Custom = mongoose.model("Custom", reviewSchema);

module.exports = Custom;