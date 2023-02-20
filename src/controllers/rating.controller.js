const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ratingService = require('../services/rating.service');

const createRating = catchAsync(async (req, res) => {
  const rating = await ratingService.createRating(req.body);
  res.status(httpStatus.CREATED).send(rating);
});

const getRatings = catchAsync(async (req, res) => {
  const ratings = await ratingService.getRatings();
  res.send(ratings);
});

const getRatingById = catchAsync(async (req, res) => {
  const rating = await ratingService.getRatingById(req.params.id);
  res.send(rating);
});

const getRatingByUserIdAndMovieId = catchAsync(async (req, res) => {
  const rating = await ratingService.getRatingByUserIdAndMovieId(req.params.userId, req.params.movieId);
  res.send(rating);
});

module.exports = {
  createRating,
  getRatings,
  getRatingById,
  getRatingByUserIdAndMovieId,
};
