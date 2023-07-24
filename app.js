const express = require("express");
const Router = require("./Router/Router.js");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const xssClean = require("xss-clean");
const rateLimiter = require("express-rate-limit");
const path = require("path");
require("dotenv").config();

const app = new express();

app.use(helmet()); 
app.use(cors()); 
app.use(hpp());
app.use(xssClean());
app.use(express.json()); 

//route limiter
const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

// Serves static files from the "client/dist" directory
app.use(express.static("./client/dist")); 

// Serve up the index.html if express doesn't recognize the route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

// All backend API routes
app.use("/v1", Router);

module.exports = app;
