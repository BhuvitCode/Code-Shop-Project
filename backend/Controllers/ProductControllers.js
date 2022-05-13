const express = require('express');
const expressValidator = require('express-validator');
const ProductModal = require('../Models/AddProduct');
const CategoryModel = require('../Models/CategoryModel');
const Sub_Category_Model = require('../Models/Sub-Category');
const ReviewMongooseModel = require('../Models/ReiviewModel');
const ColorMongooseModel = require('../Models/ColorModel');
const WishlistMongooseModel = require('../Models/WishlistModel');
const RedeemCodeModel = require('../Models/RedeemCodeModel');
const RedeemPointMongooseModel = require('../Models/RedeemPointsModel');
const LuckySpinMongooseModel = require('../Models/LuckySpinModel');
// const OrganizationMongooseModel = require('../Models/OrganizationModel');
exports.GetAllProducts = async (req, res) => {
    const GetAllProducts = await ProductModal.find({product_Category: req.params.CatSlug, product_sub_category:req.params.SubCategorySlug}).select(
        "product_name product_Desc product_Category product_price  product_image_url product_Owned_By_Company_Name"
    );

    res.json(GetAllProducts);
}


exports.CreateProduct = async (req, res, next) => {
    const {product_name,product_Desc,product_color,product_price,product_stock,product_image_url} = req.body;

    const product_Category = req.params.CategoryId;
    
    // const FindOrganiztionName = await OrganizationMongooseModel.findOne({_id:req.OrgInfo.Organization_Id});

    try {

        const AddProduct = await new ProductModal({
               product_name,product_Desc,product_Category,product_color,product_price,product_stock,product_Owned_By_Company_Name:req.OrgInfo.Organization_Name,product_image_url,product_sub_category:req.params.SubCategoryId
        });

        const SaveProduct = await AddProduct.save();

        res.status(200).json(SaveProduct)
        console.log(SaveProduct);
    } catch (error) {
        console.log(error);
        console.log("error");
        
        res.status(500).send('Internal Server Error');
    }
}


exports.GetFullProductDetailsById = async (req,res)=>{
    const GetAllDetailsOFProduct = await ProductModal.find({_id: req.params.ProductId});
    res.json(GetAllDetailsOFProduct);
}

exports.UpdateProduct = async (req,res)=>{


    try {
        const {product_name,product_Desc,product_color,product_Category,product_price,product_stock,product_image_url} = req.body;

        const FindProductToUpdate = await ProductModal.findById(req.params.product_id)

        if(FindProductToUpdate.product_Owned_By_Company_Name.toString() !== req.OrgInfo.Organization_Id){
            res.status(401).json({"Not Allowed": "Not Eligible By You"})
        }
        else{
            const UpdateProduct = await ProductModal.findByIdAndUpdate(req.params.product_id,{
                $set:{
                    product_name:product_name,product_Desc:product_Desc,product_color:product_color,product_Category:product_Category,product_price:product_price,product_stock:product_stock,product_image_url:product_image_url
                }
            });
            res.json(UpdateProduct);
        }
    } catch (error) {
        console.log(error);
    }

    
}

exports.DeleteProduct = async  (req,res)=>{
    try {

        if(FindProductToUpdate.product_Owned_By_Company_Name != req.OrgInfo.Organization_Id){
            res.status(401).json({"Not Allowed": "Not Eligible By You"})
        }

        const DeleteProductInDB = await ProductModal.findByIdAndDelete(req.params.product_id);

        if(!DeleteProductInDB){
            res.json({
                message:"Product Not Found"
            });
        }

        else{
            res.json(DeleteProductInDB);
        }

    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

exports.CreateCategory = async (req, res) => {

    try {
        const { category_name } = req.body;

        const AddCategory = await new CategoryModel({
            category_name
        });

        const SaveCategory = await AddCategory.save();

        res.json(SaveCategory);
    } catch (error) {
        res.json({
            success: false,
        })
    }

}


exports.GetAllCategories = async (req, res) => {
    const GetAllCategories2 = await CategoryModel.find({});
    res.json(GetAllCategories2);
}


exports.CreateSubCategory = async (req, res) => {
    const { Sub_Category_Name } = req.body;
    const Category_Name = req.params.CategorySlug
    const AddSubCategory = await new Sub_Category_Model({
        Sub_Category_Name,
        Category_Name
    });
    const SaveSubCategory = await AddSubCategory.save();
    res.json(SaveSubCategory);

}


exports.GetAllSubCategories = async (req, res) => {
    const GetAllSubCategoriesByCategory = await Sub_Category_Model.find({Category_Name: req.params.CategorySlugId});
    res.json(GetAllSubCategoriesByCategory);
}

exports.SumbitReview = async (req,res)=>{
    
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(422).json({errors: errors.array()});
    // }

    const {review_title,review_desc,product_overall_experience,product_rating} = req.body;

    const GetProductIdByParams = req.params.ProductId;

    const AddReview = new ReviewMongooseModel({
        review_title,
        review_desc,
        product_overall_experience,
        product_rating,
        product_id:GetProductIdByParams
    });

    const SaveReview = await AddReview.save();

    res.json(SaveReview);
}

exports.GetAllReviewsOfAProduct = async (req,res)=>{
    const GetAllReviews = await ReviewMongooseModel.find({product_id: req.params.ProductIdByParam});
    res.json(GetAllReviews);
}

exports.AddAColor = async (req,res)=>{
    const {color_name} = req.body;
    const ProductId = req.params.ProductIdentifier;
    const AddColor = new ColorMongooseModel({
        color_name,ProductId
    });

    const SaveColor = await AddColor.save();

    res.json(SaveColor);
}


exports.GetColotsByProductId = async (req,res)=>{
    const GetAllColors = await ColorMongooseModel.find({ProductId: req.params.product_id_by_param});

    res.json(GetAllColors);
}

// WishListFeatureTodo
exports.AddToWishList = async (req,res)=>{
    const GetProductId = req.params.ProductIdPrameter;
    
    const FindProductDetails = await ProductModal.findById(GetProductId);

    const AddToWishList = new WishlistMongooseModel({
        User_Name:req.AccountInfo.User_Id,
        Product_Identfier:GetProductId,
        Product_Name:FindProductDetails.product_name,
        Product_Price:FindProductDetails.product_price,
        Product_Image_Url:FindProductDetails.product_image_url,
        Product_Stock:req.body.CartQty,
        Product_Desc:FindProductDetails.product_Desc,
    })

    const SaveAddToWishList = await AddToWishList.save();
    res.json(SaveAddToWishList);
    console.log(SaveAddToWishList);
}


exports.GetWishListItems = async (req,res)=>{

    // const GetProductInfo = req.params.ProductIdForInfo

    const GetWishListItemsByUserId = await WishlistMongooseModel.find({User_Name: req.AccountInfo.User_Id});
    
    res.json(GetWishListItemsByUserId);
}

exports.GenerateCouponCode = async (req,res)=>{
    const RandomNumber = Math.floor(Math.random() * 1000000 + 1);

    if(req.body.GenerationMethod = "Points"){
        const {NoOFPoints} = req.body;

        const CalculatePointsAmount = NoOFPoints * 5;

        const CreateCodeWithPoints = await new RedeemCodeModel({
            RedeemNumber:RandomNumber,
            RedeemPrice:CalculatePointsAmount,
        })
    
        const SaveCreateCodeWithPoints = await CreateCodeWithPoints.save();
    
        res.json(SaveCreateCodeWithPoints);

    }

    else{

        const CreateCode = await new RedeemCodeModel({
            RedeemNumber:RandomNumber,
            RedeemPrice:req.body.CouponCodePrice,
        })
    
        const SaveCode = await CreateCode.save();
    
        res.json(SaveCode);

    }


}

exports.GetReedemCodes = async (req,res)=>{
    const {PriceReedemCode} = req.body;
    const GetRedeemCodes = await RedeemCodeModel.find({RedeemNumber:PriceReedemCode});

    res.json(GetRedeemCodes)
}

exports.CreateLuckyDrawItems = async (req,res)=>{
    const {LuckyItem,LuckyNumber} = req.body;

    const AddLuckyDrawItem = new LuckySpinMongooseModel({
        LuckyItem,
        LuckyNumber
    })

    const SaveLuckyDrawItem = await AddLuckyDrawItem.save();

    res.json(SaveLuckyDrawItem);
}

exports.GetLuckyItem = async (req,res)=>{
    const GenerateRandomNumber = Math.floor(Math.random() * 5 + 1);
    const GetLuckyItem = await LuckySpinMongooseModel.find({LuckyNumber: GenerateRandomNumber});

    res.json(GetLuckyItem);
}