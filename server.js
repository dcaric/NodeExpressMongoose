const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const mongoUri = 'mongodb+srv://francis8976:YaTNPCXktKNJvR20@cluster0.xs9gz.mongodb.net/myApp?retryWrites=true&w=majority';

mongoose.connect(mongoUri);
app.use(bodyParser.json());


////////// SCHEMA ////////

const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
});

const Car = mongoose.model('Car',carSchema)

//////////////////////////


app.get('/api/getcars',(req,res)=>{
    Car.findById('627593090f7e1e898775c9f4',(err,doc)=>{
        if(err) return console.log(err);
        res.json([doc])

        /// {}

    })
})


app.post('/api/addcar',(req,res)=>{
    const addCar = new Car({
        brand: req.body.brand,
        model: req.body.model,
        year:  req.body.year,
        avail: req.body.avail
    })

    addCar.save((err,doc)=>{
        if(err) return console.log(err)
        res.sendStatus(200)
    })
})



const port = process.env.POST || 3001;
app.listen(port);

/// francis8976
/// YaTNPCXktKNJvR20