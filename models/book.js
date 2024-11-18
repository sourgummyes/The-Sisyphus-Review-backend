const mongoose = require('mongoose')
const { Schema } = mongoose;

const bookSchema = new Schema({
    bookName: String,
    bookImg: String,
    AuthorName: String,
    PublisherName: String,
    ibanString: String,
    genre: String,
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
})

const Book = mongoose.model('Book', bookSchema)