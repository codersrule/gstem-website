const mongoose = require('mongoose')

const Schema = mongoose.Schema

const events_Schema = new Schema({
    title:{
        type: String,
        required: true
    },
    event_time:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true 
    },
    location:{
        type: String,
        required: true 
    },
    event_body:{
        type: String,
        required: true 
    }
}, {timestamps: true} )

module.exports = mongoose.model('Events', events_Schema)