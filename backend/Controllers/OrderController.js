const express = require('express');
// const OrganizationMongooseModel = require('../models/OrganizationModel');
const UserOrderPlacedModel = require('../models/UserOrderPlaced');
const UserAccountModel = require('../models/UserAccount');

exports.PlaceOrder = async (req, res) => {
    const {NameOFProduct,ProductTotalPrice,ProductQuantity} = req.body

    UserId2 = req.AccountInfo.User_Id

    const GetDetailsOFUser = await UserAccountModel.findById(UserId2).select('-password')
    OrganizationId = req.OrgInfo.Organization_Id

    
    const CreateOrder = await new UserOrderPlacedModel({
        user_id: UserId2,
        NameOFProduct: req.params.ProductName,
        ProductTotalPrice,
        ProductQuantity,
        PhoneNumberOFUser: GetDetailsOFUser.PhoneNumber,
        NameOFTheCountry: GetDetailsOFUser.Country,
        NameOFTheState: GetDetailsOFUser.State,
        NameOFTheCity: GetDetailsOFUser.City,
        AddressOfTheUser: GetDetailsOFUser.Address,
        Product_Brand_Name: OrganizationId,
        Product_Order_Status: 'Ordered',
        colorOfTheProduct: req.body.colorOfTheProduct
    })

    const SaveCreateOrder = await CreateOrder.save();
    res.json(SaveCreateOrder)
}


exports.GetAllProductsToDelieverByTheBrand = async (req, res) => {
    BrandName = req.OrgInfo.Organization_Id
    
    const GetAllProductsOfTheBrand = await UserOrderPlacedModel.find({Product_Brand_Name: BrandName})

    res.json(GetAllProductsOfTheBrand)
}

exports.UpdateProductStatus = async (req, res) => {
    const {Product_Order_Status} = req.body
    
    BrandName2 = req.OrgInfo.Organization_Id
    
    const GetTheProductToBeUpdated = await UserOrderPlacedModel.find({Product_Brand_Name: BrandName2, NameOFProduct: req.params.ProductNameIdentfier})

    // res.json(GetTheProductToBeUpdated)
    // if(GetTheProductToBeUpdated){
        const UpdateProductStatus = await UserOrderPlacedModel.findByIdAndUpdate(req.params.ProductNameIdentfier, {
            $set:{
                Product_Order_Status: Product_Order_Status,
            }
        })
    
        res.json(UpdateProductStatus)
    // }


}