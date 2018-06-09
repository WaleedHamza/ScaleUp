var express = require('express');

var router = express.Router();

// var data = require('../models/data.js')

router.get('/', (req, res) => {
    console.log('inside the ger route')
    console.log(req, res)
    res.render('form')
});

module.exports = router;