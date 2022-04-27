const express = require('express');
const expressValidator = require('express-validator');
const router = express.Router();
const FetchUserInfoUsingAuthToken = require('../middlewares/UserInfo');
// const express = require('express');
const bcrypt = require('bcryptjs');
const OrganizationMongooseModel = require('../models/OrganizationModel');
const UserAccountModel = require('../models/UserAccount');
const JWT_SIGNATURE = 'BhuvitIsPro$%#$%#$%#$5rte534Hac46$%$#KerBhavya%#$%#$%'
const Jwt = require("jsonwebtoken")
const FetchOrgInfoUsingToken = require('../middlewares/FetchOrgInfo')

router.post('/SignUp', async (req, res) => {

    const { username,email,password,PhoneNumber,Country,Address,State,City,ConfirmPassword } = req.body

    const salt = await bcrypt.genSalt(15);

    const SecuredPassword = await bcrypt.hash(req.body.password,salt)
    if(req.body.password !== ConfirmPassword){
        res.json({
            success:false,
            message:"Password and Confirm Password are not same"
        })
    }

    else{
        const CreateAccount = await new UserAccountModel({
            username,email,password: SecuredPassword ,PhoneNumber,Country,Address,State,City
        })

        const AccountData = {
            Account_Info:{
                User_Id:CreateAccount.id
            }
        }

        const SaveCreateAccount = await CreateAccount.save();

        const UserAuthToken =  Jwt.sign(AccountData,JWT_SIGNATURE) 
        res.json({UserAuthToken});
    }
})


router.post('/Login', async (req, res) => {
    const { email,password } = req.body

    const Account = await UserAccountModel.findOne({ email })

    if(!Account){
        res.json({
            success:false,
            message:"Organization Not Found"
        })
    }

    const CompareAccountPassword = await bcrypt.compare(password,Account.password)

    if(!CompareAccountPassword){
        res.json({
            success:false,
            message:"Invalid Credentials"
        })
    }
    else{
        const AccountData = {
            Account_Info:{
                User_Id:Account.id
            }
        }
    
        const UserAuthToken = Jwt.sign(AccountData,JWT_SIGNATURE)
    
        res.json({UserAuthToken})
        console.log({UserAuthToken})
    }
  
})

router.post('/GetAccountInfo', FetchUserInfoUsingAuthToken, async (req, res) => {
    UserId = req.AccountInfo.User_Id

    const GetDetailsOFUser = await UserAccountModel.findById(UserId).select('-password')

    // console.log(req.OrgInfo.Organization_Id)
    res.json(GetDetailsOFUser)
})  

module.exports = router;