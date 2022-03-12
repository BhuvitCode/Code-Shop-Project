const express = require('express');
const router = express.Router();
// const { body, validationResult } = require('express-validator');
const { CreateProduct,GetAllProducts,GetFullProductDetailsById,UpdateProduct,DeleteProduct,CreateCategory } = require('../Controllers/ProductControllers');

router.route('/CreateProducts/:CategoryId').post(CreateProduct);
router.route('/GetAllProducts/:CatSlug').get(GetAllProducts);
router.route('/GetAllProductsFullDetails/:ProductId').get(GetFullProductDetailsById);
router.route('/UpdateProduct/:product_id').patch(UpdateProduct);
router.route('/DeleteProduct/:product_id').delete(DeleteProduct);
router.route('/CreateProductCategory').post(CreateCategory);


module.exports = router
