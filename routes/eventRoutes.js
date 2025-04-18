const express = require('express');
const router = express.Router();
const { registerParticipant, listParticipants } = require('../controllers/eventController');

router.post('/', registerParticipant);
router.get('/', listParticipants);

module.exports = router;
