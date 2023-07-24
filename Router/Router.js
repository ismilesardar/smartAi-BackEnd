const express = require("express");
const { chatWithOpenAI } = require("../Controller/ChatAiController");

const router = express.Router();

// Route for handling the chatWithOpenAI endpoint
router.post('/chatWithOpenAI', chatWithOpenAI);

module.exports = router;
