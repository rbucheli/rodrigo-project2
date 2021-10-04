const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String },
  gender: { type: String },
  race: { type: String },
  age: { type: Number },
  birthday: { type: String },
  height: { type: String },
  hometown: { type: String },
  biography: { type: String },
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;