const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    book: { 
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true  
    },
    user_Id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    }
},
    { timestamps: true }    
)

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review;