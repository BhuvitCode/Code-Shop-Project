const express = require('express');
const router = express.Router();
// const { body, validationResult } = require('express-validator');
const { CreateAOrganization,LoginOrganizationAccount } = require('../Controllers/OrganizationAdminAccountController');
const FetchOrgInfoUsingToken = require('../middlewares/FetchOrgInfo')
const OrganizationMongooseModel = require('../models/OrganizationModel');

router.route('/CreateOrganization').post(CreateAOrganization);
router.route('/LoginIntoOrganization').post(LoginOrganizationAccount);

router.post('/GetOrganizationInfo', FetchOrgInfoUsingToken, async (req, res) => {
    OrganizationId = req.OrgInfo.Organization_Id

    const GetDetailsOFOrganization = await OrganizationMongooseModel.findById(OrganizationId).select('-Organization_Password')

    // console.log(req.OrgInfo.Organization_Id)
    res.json(GetDetailsOFOrganization)
})  
module.exports = router