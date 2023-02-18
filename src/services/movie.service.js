const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const Movie = require('../models/movies.model');

const createMovie = async (movieBody) => {
  const movie = await Movie.create(movieBody);
  return movie;
};

const getMovies = async () => {
  return Movie.find();
};

const getMovieById = async (id) => {
  const movie = await Movie.findById(id);
  if (!movie) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Movie not found');
  }
  return movie;
};

module.exports = {
  createMovie,
  getMovies,
  getMovieById,
};
