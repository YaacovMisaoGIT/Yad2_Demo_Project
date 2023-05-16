const express = require('express')
const router = express.Router()
const { getCars,
    getOneCar, 
    setCar,
    updateCar,
    deleteCar,
    } = require('../controllers/carController')

router.get('/', getCars)

router.get('/:id', getOneCar)
router.post('/', setCar)

router.put('/:id', updateCar)
router.delete('/:id', deleteCar)



module.exports = router