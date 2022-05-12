const express = require('express');
// const OrganizationMongooseModel = require('../models/OrganizationModel');
const UserOrderPlacedModel = require('../models/UserOrderPlaced');
const UserAccountModel = require('../models/UserAccount');
const RedeemCodeModel = require('../Models/RedeemCodeModel');
const RedeemPointMongooseModel = require('../Models/RedeemPointsModel');
exports.PlaceOrder = async (req, res) => {
    const {NameOFProduct,ProductTotalPrice,ProductQuantity} = req.body

    UserId2 = req.AccountInfo.User_Id

    const GetDetailsOFUser = await UserAccountModel.findById(UserId2).select('-password')
    // OrganizationId = req.OrgInfo.Organization_Id

    
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
        Product_Brand_Name: 'zyz',
        Product_Order_Status: 'Ordered',
        colorOfTheProduct: req.body.colorOfTheProduct,
        ModeOFPayment: req.body.mode
        // colorOfTheProduct: req.body.colorOfTheProduct
    })

    const SaveCreateOrder = await CreateOrder.save();
    res.json(SaveCreateOrder)
}


exports.PlaceOrderWithRedeemCode = async (req, res) => {
    const {NameOFProduct,ProductTotalPrice,ProductQuantity,RedeemAmount} = req.body

    UserId2 = req.AccountInfo.User_Id

    const GetDetailsOFUser = await UserAccountModel.findById(UserId2).select('-password')
    // OrganizationId = req.OrgInfo.Organization_Id

    const DiscountedPrice = await RedeemCodeModel.findOne({Redeem_Code: req.body.RedeemCode})

    const RedeemedPrice = ProductTotalPrice - DiscountedPrice.RedeemPrice

    const CreateOrder = await new UserOrderPlacedModel({
        user_id: UserId2,
        NameOFProduct: req.params.ProductUniqueId,
        ProductTotalPrice:RedeemedPrice,
        ProductQuantity,
        PhoneNumberOFUser: GetDetailsOFUser.PhoneNumber,
        NameOFTheCountry: GetDetailsOFUser.Country,
        NameOFTheState: GetDetailsOFUser.State,
        NameOFTheCity: GetDetailsOFUser.City,
        AddressOfTheUser: GetDetailsOFUser.Address,
        Product_Brand_Name: 'zyz',
        Product_Order_Status: 'Ordered',
        colorOfTheProduct: req.body.colorOfTheProduct,
        ModeOFPayment: req.body.mode
        // colorOfTheProduct: req.body.colorOfTheProduct
    })

    const GetTotalRedeemPoints = await RedeemPointMongooseModel.findOne({User_Id: UserId2})
    const AddRedeemPointsWithTotal = GetTotalRedeemPoints.TotalRedeemPoints + 5
    if(!GetTotalRedeemPoints){
        const addRedeemPoints = await new RedeemPointMongooseModel({
            User_Id: UserId2,
            TotalRedeemPoints: 5
        })

        const SaveAddRedeemPoints = await addRedeemPoints.save();
    }

    
    if(GetTotalRedeemPoints){
        // const addRedeemPoints = await new RedeemPointMongooseModel({
        //     User_Id: UserId2,
        //     TotalRedeemPoints:AddRedeemPointsWithTotal
        // })

        // const UpdateRedeemPoints = await RedeemPointMongooseModel.findByIdAndUpdate(UserId2,{
        //     $set:{
        //         User_Id: UserId2,
        //         TotalRedeemPoints:AddRedeemPointsWithTotal
        //     }
        // });

        const UpdateRedeemPoints = await RedeemPointMongooseModel.updateOne({User_Id:UserId2},{
                $set:{
                    User_Id: UserId2,
                    TotalRedeemPoints:AddRedeemPointsWithTotal
                }
            })
        
        const find = await RedeemPointMongooseModel.find({User_Id: UserId2})
        console.log(find);
    }

    const SaveCreateOrder = await CreateOrder.save();
    res.json(SaveCreateOrder)
    console.log(SaveCreateOrder)
}

exports.GetAllProductsToDelieverByTheBrand = async (req, res) => {
    BrandName = req.OrgInfo.Organization_Id
    
    const GetAllProductsOfTheBrand = await UserOrderPlacedModel.find({Product_Brand_Name: BrandName})

    res.json(GetAllProductsOfTheBrand)
}

exports.GetOrdersOFUsers = async (req, res) => {
    UserId = req.AccountInfo.User_Id
    
    const OrdersOFUser = await UserOrderPlacedModel.find({user_id: UserId})

    res.json(OrdersOFUser)
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

