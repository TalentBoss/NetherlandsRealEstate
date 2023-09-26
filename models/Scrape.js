const mongoose = require('mongoose');

const ScrapeSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  street: {
    type: String,
    default: undefined
  },
  city: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: undefined
  },
  square: {
    type: String,
    default: undefined
  },
  room_number: {
    type: String,
    default: undefined
  },
  updated_time: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('scrape', ScrapeSchema);
