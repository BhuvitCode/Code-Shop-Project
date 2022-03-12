// const express = require('express');
// const expressValidator = require('express-validator');
const ProductModal = require('../Models/AddProduct');
const CategoryModel = require('../Models/CategoryModel');

exports.GetAllProducts = async (req, res) => {
    const GetAllProducts = await ProductModal.find({product_Category: req.params.CatSlug}).select(
        "product_name product_Desc product_Category product_price  product_image_url"
    );

    res.json(GetAllProducts);
}


exports.CreateProduct = async (req, res, next) => {
    const {product_name,product_Desc,product_color,product_price,product_stock,product_Owned_By_Company_Name,product_image_url} = req.body;

    // const errors = validationResult(req);

    // if(!errors.isEmpty()){
    //     return res.status(422).json({errors: errors.array()});
    // }

    const product_Category = req.params.CategoryId;
    // const product_Category = await CategoryModel.findById(CatIdExtract).select("-_id");
    try {
        const AddProduct = await new ProductModal({
            product_name,product_Desc,product_Category,product_color,product_price,product_stock,product_Owned_By_Company_Name,product_image_url
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
        const {product_name,product_Desc,product_color,product_Category,product_price,product_stock,product_Owned_By_Company_Name,product_image_url} = req.body;
    const UpdateProduct = await ProductModal.findByIdAndUpdate(req.params.product_id,{
        $set:{
            product_name:product_name,product_Desc:product_Desc,product_color:product_color,product_Category:product_Category,product_price:product_price,product_stock:product_stock,product_Owned_By_Company_Name:product_Owned_By_Company_Name,product_image_url:product_image_url
        }
    });
    res.json(UpdateProduct);
    } catch (error) {
        console.log(error);
    }
    
}

exports.DeleteProduct = async  (req,res)=>{
    try {
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