const express = require('express')
const router = express.Router()
const { getCar, 
    setCar,
    updateCar,
    deleteCar,
    } = require('../controllers/carController')

router.route('/').get(getCar).post(setCar)
// router.get('/', getCar)
// router.post('/', setCar)

router.route('/:id').delete(deleteCar).put(updateCar)
// router.put('/:id', updateCar)
// router.delete('/:id', deleteCar)

module.exports = router