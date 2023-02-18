const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
      trim: true,
    },
    commentTitle: {
      type: String,
      required: true,
      trim: true,
    },
    commentContent: {
      type: String,
      required: true,
      trim: true,
    },
    userId: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
