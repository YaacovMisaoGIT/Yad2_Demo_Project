const express = require('express')
const router = express.Router()
const { getGoal, 
    setGoal,
    updateGoal,
    deleteGoal,
    } = require('../controllers/goalController')

router.route('/').get(getGoal).post(setGoal)
// router.get('/', getGoal)
// router.post('/', setGoal)

router.route('/:id').delete(deleteGoal).put(updateGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

module.exports = router