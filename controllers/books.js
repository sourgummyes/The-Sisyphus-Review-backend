const Book = require ('../models/book.js');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
      const createdBook = await Book.create(req.body);
      res.status(201).json(createdBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const foundBooks = await Book.find();
      res.status(200).json(foundBooks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  router.get('/:id', async (req, res) => {
    try {
      const foundBook = await Book.findById(req.params.id);
      if (!foundBook) {
        res.status(404);
        throw new Error('Book not found.');
      }
      res.status(200).json(foundBook);
    } catch (error) {
      if (res.statusCode === 404) {
        res.json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updatedBook) {
        res.status(404);
        throw new Error('Book not found.');
      }
      res.status(200).json(updatedBook);
    } catch (error) {
      if (res.statusCode === 404) {
        res.json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  });


  router.delete('/:id', async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        res.status(404);
        throw new Error('Review not found.');
      }
      res.status(200).json(`${deletedbook.bookName} has been deleted.`);
    } catch (error) {
      if (res.statusCode === 404) {
        res.json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  });

module.exports = router;