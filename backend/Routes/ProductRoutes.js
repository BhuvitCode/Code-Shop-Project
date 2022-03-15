const express = require('express');
const router = express.Router();
// const { body, validationResult } = require('express-validator');
const { CreateProduct,GetAllProducts,GetFullProductDetailsById,UpdateProduct,DeleteProduct,CreateCategory,CreateSubCategory,GetAllSubCategories,SumbitReview,GetAllReviewsOfAProduct,AddAColor,GetColotsByProductId } = require('../Controllers/ProductControllers');

router.route('/CreateProducts/:CategoryId').post(CreateProduct);
router.route('/GetAllProducts/:CatSlug').get(GetAllProducts);
router.route('/CreateSubCategory/:CategorySlug').post(CreateSubCategory);
router.route('/GetAllSubCategoriesByCategore/:CategorySlugId').get(GetAllSubCategories);
router.route('/GetAllProductsFullDetails/:ProductId').get(GetFullProductDetailsById);
router.route('/UpdateProduct/:product_id').patch(UpdateProduct);
router.route('/DeleteProduct/:product_id').delete(DeleteProduct);
router.route('/CreateProductCategory').post(CreateCategory);
router.route('/AddAReview/:ProductId').post(SumbitReview);
router.route('/GetReviewsByProduct/:ProductIdByParam').get(GetAllReviewsOfAProduct);
router.route('/AddColor/:ProductIdentifier').post(AddAColor);
router.route('/GetColors/:product_id_by_param').get(GetColotsByProductId);

module.exports = router
