const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  position: {
    type: String,
    enum: ['QB', 'RB', 'WR', 'TE'],
    required: false
  },
  team: {
    type: String,
    required: true
  },
  espnId: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Player', PlayerSchema);