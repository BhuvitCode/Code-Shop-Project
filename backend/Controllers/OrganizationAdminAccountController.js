const express = require('express');
const bcrypt = require('bcryptjs');
const OrganizationMongooseModel = require('../models/OrganizationModel');
const JWT_SIGNATURE = 'BhuvitIsPro$%#$%#$%#$5rte534Hac46$%$#Ker'
const Jwt = require("jsonwebtoken")
const FetchOrgInfoUsingToken = require('../middlewares/FetchOrgInfo')


exports.CreateAOrganization = async (req, res) => {

    const { Oraganization_Name,Oraganization_Email,Oraganization_Helpline_PhoneNumber,Oraganization_HeadQuater_Address,Organization_Founder_Name,Organization_Password, Organization_Description,ConfirmPassword } = req.body

    const salt = await bcrypt.genSalt(15);

    const SecuredPassword = await bcrypt.hash(req.body.Organization_Password,salt)
    if(Organization_Password !== ConfirmPassword){
        res.json({
            success:false,
            message:"Password and Confirm Password are not same"
        })
    }

    else{
        const CreateOrganization = await new OrganizationMongooseModel({
            Oraganization_Name,Oraganization_Email,Oraganization_Helpline_PhoneNumber,Oraganization_HeadQuater_Address,Organization_Founder_Name,Organization_Password: SecuredPassword ,Organization_Description
        })

        const OrganizationData = {
            // Organization_Info:CreateOrganization.id
            Organization_Info:{
                Organization_Id:CreateOrganization.id,
                Organization_Name:CreateOrganization.Oraganization_Name
            }
        }

        const SaveCreateOrganization = await CreateOrganization.save();

        const OrganizationAuthToken =  Jwt.sign(OrganizationData,JWT_SIGNATURE) 
        res.json({OrganizationAuthToken});
    }
}

exports.LoginOrganizationAccount = async (req, res) => {
    const { Oraganization_Email,Organization_Password,
    
    } = req.body

    const Organization = await OrganizationMongooseModel.findOne({ Oraganization_Email })

    if(!Organization){
        res.json({
            success:false,
            message:"Organization Not Found"
        })
    }

    if(Organization_Password !== ConfirmPassword){
        res.json({
            success:false,
            message:"Password and Confirm Password are not same"
        })
    }

    const CompareOrgPassword = await bcrypt.compare(Organization_Password,Organization.Organization_Password)

    if(!CompareOrgPassword){
        res.json({
            success:false,
            message:"Invalid Credentials"
        })
    }
    else{
        const OrganizationData = {
            Organization_Info:{
                Organization_Id:Organization.id,
                Organization_Name:Organization.Oraganization_Name
            }
        }
    
        const OrganizationAuthToken = Jwt.sign(OrganizationData,JWT_SIGNATURE)
    
        res.json({OrganizationAuthToken})
    }
  
}

