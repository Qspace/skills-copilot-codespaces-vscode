// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Comment = require('./models/comment');
const app = express();
const router = express.Router();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
// Connect to MongoDB database
// mongoose.connect('mongodb://