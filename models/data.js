const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    c: Number,
    co2: Number,
    so2: Number,
    o2: Number,
    co: Number,
    date: {
        type: Date,
        default: Date.now
        }
})

module.exports = mongoose.model('dataSet',dataSchema);