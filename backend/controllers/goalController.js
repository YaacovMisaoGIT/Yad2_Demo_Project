const asyncHandler = require('express-async-handler')

// @desc Get Goal
// @route GET /api/goals
// @access Private
const getGoal = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Get goals'})
})

// @desc Set Goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'Set goals'})
})

// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})

// @desc Delete Goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal,
}
