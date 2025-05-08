const mongoose = require('mongoose');

const connect = ()=>{
    mongoose.connect("mongodb://localhost:27017/pro_react").then(() => {
        console.log("connected")
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = connect
