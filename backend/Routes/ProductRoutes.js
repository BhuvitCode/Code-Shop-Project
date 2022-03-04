const express = require('express');
const router = express.Router();
// const { body, validationResult } = require('express-validator');
const { CreateProduct,GetAllProducts } = require('../Controllers/ProductControllers');

router.route('/CreateProducts').post(CreateProduct);
router.route('/GetAllProducts').get(GetAllProducts);


// router.get('/start', async (req,res)=>{
//     res.send('Hello');
// })

module.exports = router
