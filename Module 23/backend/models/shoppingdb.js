var mongoose = require('mongoose');

var logdetails = new mongoose.Schema ({
    username : String,
    password : String,
    emailid : String,
    sucess : Boolean
});

var productdetails = new mongoose.Schema ({
    pid: Number,
    title: String,
    description: String,
    image: String,
    review: String,
    rating: Number,
    price: Number,
    offers: String,
    availability: String
});

module.exports =  mongoose.model('signup', Profileinfo);