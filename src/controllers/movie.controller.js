const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const movieService = require('../services/movie.service');

const createMovie = catchAsync(async (req, res) => {
  const movie = await movieService.createMovie(req.body);
  res.status(httpStatus.CREATED).send(movie);
});

const getMovies = catchAsync(async (req, res) => {
  const movies = await movieService.getMovies();
  res.send(movies);
});

const getMovieById = catchAsync(async (req, res) => {
  const movie = await movieService.getMovieById(req.params.id);
  res.send(movie);
});

module.exports = {
  createMovie,
  getMovies,
  getMovieById,
};
