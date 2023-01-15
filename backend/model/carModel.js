const  mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    info: {
        type: String,
        required: [true, 'Please add a info']
    },
    describtion: {
        type: String,
        required: [true, 'Please add a description']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price']
    },
    hand: {
        type: Number,
        required: [true, 'Please add a number of hand']
    },
    year: {
        type: Number,
        required: [true, 'Please add a year']
    },
    engineSize: {
        type: Number,
        required: [true, 'Please add a description']
    },
    contact: {
        type: Number,
        required: [true, 'Please add a number']
    },
    salesArea: {
        type: String,
        required: [true, 'Please add a description']
    },
    More:[{
        mileAge: {
            type: Number,
            required: [true, 'Please add a mileage']
        },
        engineType: {
            type: String,
            required: [true, 'Please add a engine type']
        },
        gearbox: {
            type: String,
            required: [true, 'Please add a gearbox']
        },
        color: {
            type: String,
            required: [true, 'Please add a color']
        },
        firstDay: {
            type: Date,
            required: [true, 'Please add a first day on the road']
        },
        lastDay: {
            type: Date,
            required: [true, 'Please add a last day on the road']
        },
        currentOwnership: {
            type: String,
            required: [true, 'Please add a current ownership']
        },
        previousOwnership: {
            type: String,
            required: [true, 'Please add a previous ownership']
        }, 
        }],
    Amature:[ {
        airConditioner: {
            type: Boolean,
            required: true
        },
        roofWindow: {
            type: Boolean,
            required: true
        },
        fourIntoTwo: {
            type: Boolean,
            required: true
        },
        stabilityControl: {
            type: Boolean,
            required: true
        },
        tirePressureSensors: {
            type: Boolean,
            required: true
        },
        identifyTrafficSign: {
            type: Boolean,
            required: true
        },
        abs: {
            type: Boolean,
            required: true
        },
        powerSteering: {
            type: Boolean,
            required: true
        },
        reverseCamera: {
            type: Boolean,
            required: true
        },
        pedestrianDetection: {
            type: Boolean,
            required: true
        },
        beltSensors: {
            type: Boolean,
            required: true
        },
        electricWindows: {
            type: Boolean,
            required: true
        },
        airBags: {
            type: Boolean,
            required: true
        },
        magnesiumWheels: {
            type: Boolean,
            required: true
        },
        auxiliaryBrakeSystem: {
            type: Boolean,
            required: true
        },
        automaticLightning: {
            type: Boolean,
            required: true
        },
    }]

},
{
    timestamps: true,
}
)

module.exports = mongoose.model('Car', carSchema)