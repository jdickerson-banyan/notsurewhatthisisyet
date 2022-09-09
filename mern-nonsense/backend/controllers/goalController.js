const getGoals = (req, res) => {
    res.status(200).json({message: 'get goals'})
}

const createGoal = (req, res) => {
    res.status(200).json({message: 'create goal'})
}

const editGoal = (req, res) => {
    res.status(200).json({message: `edit goal ${req.params.id}`})
}

const deleteGoal = (req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
}

module.exports = {
    getGoals, createGoal, editGoal, deleteGoal
}
