const Review = require ('../models/review.js');
const express = require('express');
const router = express.Router();

// CREATE - POST - /reviews
router.post('/', async (req, res) => {
    try {
      const createdReview = await Review.create(req.body);
      res.status(201).json(createdReview);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// READ - GET - /reviews
router.get('/', async (req, res) => {
    try {
      const foundReviews = await Review.find();
      res.status(200).json(foundReviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// READ - GET - /reviews/:id
// router.get('/:id', async (req, res) => {
//     try {
//       const foundReview = await Review.findById(req.params.id);
//       if (!foundReview) {
//         res.status(404);
//         throw new Error('Review not found.');
//       }
//       res.status(200).json(foundReview);
//     } catch (error) {
//       if (res.statusCode === 404) {
//         res.json({ error: error.message });
//       } else {
//         res.status(500).json({ error: error.message });
//       }
//     }
//   });

// READ - GET - /books/:bookId/reviews
router.get("/:bookId", async (req, res) => {
  try {
    const { bookId } = req.params;
    const foundReviews = await Review.find({ book: bookId }).populate(
      "user_Id",
      "username"
    ); // Populate user details
    if (!foundReviews.length) {
      res.status(404).json({ error: "No reviews found for this book." });
      return;
    }
    res.status(200).json(foundReviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// UPDATE - PUT - /reviews/:id
router.put('/:id', async (req, res) => {
    try {
      const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updatedReview) {
        res.status(404);
        throw new Error('Review not found.');
      }
      res.status(200).json(updatedReview);
    } catch (error) {
      if (res.statusCode === 404) {
        res.json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  });

// DELETE - DELETE - /reviews/:id
router.delete('/:id', async (req, res) => {
    try {
      const deletedReview = await Review.findByIdAndDelete(req.params.id);
      if (!deletedReview) {
        res.status(404);
        throw new Error('Review not found.');
      }
      res.status(200).json(`${deletedReview.book} review by ${deletedReview.user_Id} has been deleted.`);
    } catch (error) {
      if (res.statusCode === 404) {
        res.json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  });

module.exports = router;