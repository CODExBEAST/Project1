const Participant = require('../models/Participant');


exports.registerParticipant = async (req, res) => {
  try {
    const { name, event, email } = req.body;
    const newParticipant = await Participant.create({ name, event, email });
    res.status(201).json(newParticipant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.listParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    res.status(200).json(participants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

