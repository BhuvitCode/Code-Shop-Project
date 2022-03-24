const express = require('express');
const router = express.Router();
// const { body, validationResult } = require('express-validator');
const { CreateProduct,GetAllProducts,GetFullProductDetailsById,UpdateProduct,DeleteProduct,CreateCategory,CreateSubCategory,GetAllSubCategories,SumbitReview,GetAllReviewsOfAProduct,AddAColor,GetColotsByProductId,AddToWishList, GetWishListItems,GetAllCategories} = require('../Controllers/ProductControllers');
// const FetchOrgInfoUsingToken = require('../middlewares/FetchOrgInfo')
const FetchUserInfoUsingAuthToken = require('../middlewares/UserInfo');


const {PlaceOrder,GetAllProductsToDelieverByTheBrand,UpdateProductStatus} = require('../Controllers/OrderController');
const FetchOrgInfoUsingToken = require('../middlewares/FetchOrgInfo')

// const GetAllProductsToDelieverByTheBrand = require('../Controllers/OrderProcessingController')
router.route('/CreateProducts/:CategoryId').post(FetchOrgInfoUsingToken,CreateProduct);
router.route('/GetAllProducts/:CatSlug').get(GetAllProducts);
router.route('/CreateSubCategory/:CategorySlug').post(CreateSubCategory);
router.route('/GetAllCategories').get(GetAllCategories)
router.route('/GetAllSubCategoriesByCategore/:CategorySlugId').get(GetAllSubCategories);
router.route('/GetAllProductsFullDetails/:ProductId').get(GetFullProductDetailsById);
router.route('/UpdateProduct/:product_id').patch(FetchOrgInfoUsingToken,UpdateProduct);
router.route('/DeleteProduct/:product_id').delete(FetchOrgInfoUsingToken,DeleteProduct);
router.route('/CreateProductCategory').post(CreateCategory);
router.route('/AddAReview/:ProductId').post(SumbitReview);
router.route('/GetReviewsByProduct/:ProductIdByParam').get(GetAllReviewsOfAProduct);
router.route('/AddColor/:ProductIdentifier').post(AddAColor);
router.route('/GetColors/:product_id_by_param').get(GetColotsByProductId);
router.route('/OrderProducts/:ProductName').post(FetchUserInfoUsingAuthToken,FetchOrgInfoUsingToken,PlaceOrder);

router.route('/GetProductsOFTheOrganization').post(FetchOrgInfoUsingToken,GetAllProductsToDelieverByTheBrand);

router.route('/UpdateTheProductStatus/:ProductNameIdentfier').patch(FetchOrgInfoUsingToken,UpdateProductStatus);


router.route('/AddToWishList/:ProductIdPrameter').post(FetchUserInfoUsingAuthToken,AddToWishList);

router.route('/GetAllWishListItems').post(FetchUserInfoUsingAuthToken,GetWishListItems);


// UpdateProductStatus
module.exports = router
