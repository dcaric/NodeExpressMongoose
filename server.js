const express = require('express');
const app = express();
const mongoose = require('mongoose');

const mongoUri = 'mongodb+srv://francis8976:YaTNPCXktKNJvR20@cluster0.xs9gz.mongodb.net/myApp?retryWrites=true&w=majority';

mongoose.connect(mongoUri);

////////// SCHEMA ////////

const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
});

const Car = mongoose.model('Car',carSchema)

//////////////////////////



const port = process.env.POST || 3001;
app.listen(port);

/// francis8976
/// YaTNPCXktKNJvR20