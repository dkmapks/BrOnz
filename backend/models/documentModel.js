const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  idNumber: { type: String, required: true },
  birthDate: { type: Date, required: true },
  photo: { type: String, required: true }
});

module.exports = mongoose.model('Document', DocumentSchema);
