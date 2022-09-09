const express = require('express')
const router = express.Router()
const { getGoals, createGoal, editGoal, deleteGoal } = require('../controllers/goalController')


router.get('/', getGoals)

router.post('/', createGoal)

router.put('/:id', editGoal)

router.delete('/:id', deleteGoal)

module.exports = router
