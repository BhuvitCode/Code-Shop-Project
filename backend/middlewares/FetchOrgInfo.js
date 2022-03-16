const Jwt = require('jsonwebtoken');
const JWT_SIGNATURE = 'BhuvitIsPro$%#$%#$%#$5rte534Hac46$%$#Ker'

const FetchOrgInfoUsingToken = async (req, res, next) => {
    const OrgToken = req.header('Organization-Auth-Token');

    if (!OrgToken) {
        return res.status(401).json({
            success: false,
            message: 'Auth Token is not provided or Use Correct token'
        })
    }

    const OrganizationData = Jwt.verify(OrgToken, JWT_SIGNATURE);

    req.OrgInfo = OrganizationData.Organization_Info
    next()

}

module.exports = FetchOrgInfoUsingToken