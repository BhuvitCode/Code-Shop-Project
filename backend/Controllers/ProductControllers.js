// const express = require('express');
// const expressValidator = require('express-validator');
const ProductModal = require('../Models/AddProduct');

exports.GetAllProducts = async (req, res) => {
    const GetAllProducts = await ProductModal.find();

    res.json(GetAllProducts);
}


exports.CreateProduct = async (req, res, next) => {
    const {product_name,product_Desc,product_color,product_Category,product_price,product_stock,product_Owned_By_Company_Name,product_image_url} = req.body;

    // const errors = validationResult(req);

    // if(!errors.isEmpty()){
    //     return res.status(422).json({errors: errors.array()});
    // }

    try {
        const AddProduct = await new ProductModal({
            product_name,product_Desc,product_color,product_Category,product_price,product_stock,product_Owned_By_Company_Name,product_image_url
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