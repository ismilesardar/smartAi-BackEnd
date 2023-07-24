const axios = require('axios');

const chatWithOpenAI = async (req, res) => {
  const apiRequestBody = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      apiRequestBody,
      {
        headers: {
          'Authorization': 'Bearer ' + process.env.API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    const firstResponse = response.data.choices[0].message.content;

    res.json({ response: firstResponse });
  } catch (error) {
    res.json({ error: "Error in the API request" });
  }
};

module.exports = { chatWithOpenAI };
