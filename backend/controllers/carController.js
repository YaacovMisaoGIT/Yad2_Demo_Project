const asyncHandler = require('express-async-handler')
const { deleteModel } = require('mongoose')

const Car = require('../model/carModel')

// @desc Get Car
// @route GET /api/cars
// @access Private
const getCar = asyncHandler(async (req, res) => {
    const cars = await Car.find()
    res.status(200).json(cars)
})

// @desc Set Car
// @route POST /api/cars
// @access Private
const setCar = asyncHandler(async (req, res) => {
    const { name, info, describtion, price, hand, year, engineSize, contact, salesArea, More } = req.body
    console.log(More)
    if(!req.body) {
        res.status(400)
        throw new Error('Please add a all the information required')
    }

    const car = await Car.create({
        name: req.body.name,
        info: req.body.info,
        describtion: req.body.describtion,
        price: req.body.price,
        hand: req.body.hand,
        year: req.body.year,
        engineSize: req.body.engineSize,
        contact: req.body.contact,
        salesArea: req.body.salesArea,
        More:[{
        mileAge: req.body.More.mileAge,
        engineType: req.body.More.engineType,
        gearbox: req.body.More.gearbox,
        color: req.body.More.color,
        firstDay: req.body.More.firstDay,
        lastDay: req.body.More.lastDay,
        currentOwnership: req.body.More.currentOwnership,
        previousOwnership: req.body.More.previousOwnership,
        }],
    // amature: [{
    //     airConditioner: req.body.amature.airConditioner,
    //     roofWindow: req.body.amature.roofWindow,
    //     fourIntoTwo: req.body.amature.fourIntoTwo,
    //     stabilityControl: req.body.amature.stabilityControl,
    //     tirePressureSensors: req.body.amature.tirePressureSensors,
    //     identifyTrafficSign: req.body.amature.identifyTrafficSign,
    //     abs: req.body.amature.abs,
    //     powerSteering: req.body.amature.powerSteering,
    //     reverseCamera: req.body.amature.reverseCamera,
    //     pedestrianDetection: req.body.amature.pedestrianDetection,
    //     beltSensors: req.body.amature.beltSensors,
    //     electricWindows: req.body.amature.electricWindows,
    //     magnesiumWheels: req.body.amature.magnesiumWheels,
    //     auxiliaryBrakeSystem: req.body.amature.auxiliaryBrakeSystem,
    //     automaticLightning: req.body.amature.automaticLightning,
    //     }]
    })

    res.status(200).json(car)
})

// @desc Update Car
// @route PUT /api/cars/:id
// @access Private
const updateCar = asyncHandler(async (req, res) => {
    const car = await Car.findById(req.params.id)

    if(!car) {
        res.status(400)
        throw new Error('Car not found')
    }

    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedCar)
})

// @desc Delete Car
// @route DELETE /api/cars/:id
// @access Private
const deleteCar = asyncHandler(async (req, res) => {
    const car = await Car.findById(req.params.id)

    if(!car) {
        res.status(400)
        throw new Error('Car not found')
    }
    await car.remove()

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getCar,
    setCar,
    updateCar,
    deleteCar,
}
