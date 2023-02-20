const express = require('express');
const ratingController = require('../../controllers/rating.controller');

const router = express.Router();

router.post('/', ratingController.createRating);
router.get('/', ratingController.getRatings);
router.get('/:id', ratingController.getRatingById);
router.get('/user/:userId/movie/:movieId', ratingController.getRatingByUserIdAndMovieId);

module.exports = router;
