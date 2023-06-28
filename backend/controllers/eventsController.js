const Events = require('../models/eventModel')
const mongoose = require('mongoose')

// get all workouts
const getEvents = async (req, res) => {
    const events = await Events.find({}).sort({createdAt: -1})

    res.status(200).json(events) 
}

// get a workout
const getEvent = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such event"})
    }
    const event = await Events.findById(id)
    if (!event) {
        return res.status(404).json({error: 'No such event'})
    }
    res.status(200).json(event)
}

// create a new workout. Add data to db
const createEvents =  async (req, res) => {
    const {title, event_time, date, location, event_body} = req.body

    try{
      const event = await Events.create({title, event_time, date, location, event_body})
      res.status(200).json(event)
    }catch (error){
      res.status(400).json({error: error.message})
    }
}

// delete a workout
const deleteEvent = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Does not exist"})
    }

    const event = await Events.findOneAndDelete({_id: id})

    if (!event){
        return res.status(400).json({error: 'No such event'})
    }

    res.status(200).json(event)
}

// update a workout
const updateEvent = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Does not exist"})
    }

    const event = await Events.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!event){
        return res.status(400).json({error: 'No such event'})
    }
    res.status(200).json(event)
}

module.exports = {
    createEvents,
    getEvents,
    getEvent,
    deleteEvent,
    updateEvent
}