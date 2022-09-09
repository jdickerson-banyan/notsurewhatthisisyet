const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'get goals'})
})

const createGoal = asyncHandler(async (req, res) => {
    if (!req.body.test) {
        res.status(400)
        throw new Error('Text field needed')
    }

    res.status(200).json({message: 'create goal'})
})

const editGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `edit goal ${req.params.id}`})
})

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
})

module.exports = {
    getGoals, createGoal, editGoal, deleteGoal
}
