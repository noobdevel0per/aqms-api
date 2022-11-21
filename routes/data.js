const express = require('express');
const data = require('../models/data');
const dataSet = require('../models/data');
const router = express.Router();


//get all data
router.get('/', async (req, res) => {
    try {
        const data = await dataSet.find();
        res.json(data);
    }
    catch (err) {
        res.json({ message: err })
    }
});

//get specidifc data by id
router.get('/:dataId', async (req, res) => {
    try {
        const data = await dataSet.findById(req.params.dataId);
        res.json(data);
    } catch (err) {
        res.json({ message: err });
    }
});


//save data
router.post('/', (req, res) => {
    const Data = new dataSet({
        c: req.body.c,
        co2: req.body.co2,
        so2: req.body.so2,
        o2: req.body.o2,
        co: req.body.co
    });
    Data.save()
        .then(dataentry => {
            res.json(dataentry)
        })
        .catch(err => {
            res.json({ message: err })
        })
});

module.exports = router;