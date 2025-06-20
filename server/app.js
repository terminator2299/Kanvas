const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('./config/passport');
require("dotenv").config();
const app = express();

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
// app.use(
//   cors({
//       origin: '*',
//       methods: "GET, POST, PATCH, DELETE, PUT",
//       allowedHeaders: "Content-Type, Authorization",
//      })
//   );
// app.all('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
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
