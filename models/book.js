const mongoose = require('mongoose')
// const Review = require('../models/review.js')
const { Schema } = mongoose;

const bookSchema = new Schema({
    bookName: {type: String, required: true},
    bookImg: {type: String, required: true},
    authorName: {type: String, required: true},
    publisherName: {type: String, required: true},
    isbnString: {type: String, required: true},
    genre: {type: String, required: true},
    // reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }], // STRETCH GOAL
},
{ timestamps: true }    
)

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;