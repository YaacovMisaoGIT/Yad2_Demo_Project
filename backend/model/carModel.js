const  mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    describtion: {
        type: String,
        required: [true, 'Please add a description']
    },
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
    
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('Car', carSchema)