const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const Rating = require('../models/rating.model');

const createRating = async (ratingBody) => {
  const rating = await Rating.create(ratingBody);
  return rating;
};

const getRatings = async () => {
  return Rating.find();
};

const getRatingById = async (id) => {
  const rating = await Rating.findById(id);
  if (!rating) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Rating not found');
  }
  return rating;
};

const getRatingByUserIdAndMovieId = async (userId, movieId) => {
  const rating = await Rating.findOne({ userId, movieId });
  if (!rating) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Rating not found');
  }
  return rating;
};

module.exports = {
  createRating,
  getRatings,
  getRatingById,
  getRatingByUserIdAndMovieId,
};
