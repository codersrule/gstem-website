const express = require('express')
const router = express.Router()

const {
    createEvents,
    getEvent,
    getEvents,
    updateEvent,
    deleteEvent
} = require('../controllers/eventsController')

// GET all workouts
router.get('/', getEvents)

// GET a single workout
router.get('/:id', getEvent)

// POST a new workout
router.post('/', createEvents)

// DELETE a workout
router.delete('/:id', deleteEvent)

// UPDATE a workout
router.patch('/:id', updateEvent)

module.exports = router