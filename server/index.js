const express = require("express");
const path = require("path");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001; // Set your desired port number

app.use(cors());

app.get("/", (req, res) => {
  res.send("Helo, Worl!");
});

app.get("/api/v1/sentiment/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const sentiments = ["Positive", "Neutral", "Negative"];
  const randomSentiment =
    sentiments[Math.floor(Math.random() * sentiments.length)];
  res.send({ sentiment: randomSentiment });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
