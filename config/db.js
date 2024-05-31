const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1/crudwithmvc')

const db = mongoose.connection

db.on('connected',(err)=>{
    if (err) {
        console.log(err);
        return false    
    }
    console.log("db is start");
})

module.exports = db