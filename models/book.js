const mongoose = require('mongoose')
const Review = require('../models/review.js')
const { Schema } = mongoose;

const bookSchema = new Schema({
    bookName: {type: String, required: true},
    bookImg: {type: String, required: true},
    AuthorName: {type: String, required: true},
    PublisherName: {type: String, required: true},
    ibanString: {type: String, required: true},
    genre: {type: String, required: true},
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
},
{ timestamps: true }    
)

const Book = mongoose.model('Book', bookSchema)