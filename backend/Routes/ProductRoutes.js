const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
// const { get } = require('../Controllers/ProductControllers');

// router.route('/products').get(get);

router.post('/start', (req,res)=>{
    console.log("Hello");
})

module.exports = router
