const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  event: { type: String, required: true },
  email: { type: String, required: true}
});

module.exports = mongoose.model('Participant', participantSchema);
