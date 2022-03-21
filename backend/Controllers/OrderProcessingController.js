const express = require('express');
const UserOrderPlacedModel = require('../models/UserOrderPlaced');


exports.GetAllProductsToDelieverByTheBrand = async (req, res) => {
    BrandName = req.OrgInfo.Organization_Id
    
    const GetAllProductsOfTheBrand = await UserOrderPlacedModel.find({Product_Brand_Name: BrandName})

    res.json(GetAllProductsOfTheBrand)
}