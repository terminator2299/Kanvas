const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('./config/passport');
require("dotenv").config();
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'planifysecret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }, // set to true if using HTTPS
}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Kanban API running!");
});

module.exports = app;
