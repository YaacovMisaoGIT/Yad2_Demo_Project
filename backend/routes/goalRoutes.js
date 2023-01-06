const express = require('express')
const router = express.Router()
const { getCar, 
    setCar,
    updateCar,
    deleteCar,
    } = require('../controllers/goalController')

router.route('/').get(getCar).post(setCar)
// router.get('/', getGoal)
// router.post('/', setGoal)

router.route('/:id').delete(deleteCar).put(updateCar)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

module.exports = router