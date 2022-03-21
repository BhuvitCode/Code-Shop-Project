const Jwt = require('jsonwebtoken');
const JWT_SIGNATURE = 'BhuvitIsPro$%#$%#$%#$5rte534Hac46$%$#KerBhavya%#$%#$%'

const FetchUserInfoUsingAuthToken = async (req, res, next) => {
    const AccountToken = req.header('Auth-Token');

    if (!AccountToken) {
        return res.status(401).json({
            success: false,
            message: 'Auth Token is not provided or Use Correct token'
        })
    }

    const AccountData = Jwt.verify(AccountToken, JWT_SIGNATURE);

    req.AccountInfo = AccountData.Account_Info
    next()

}

module.exports = FetchUserInfoUsingAuthToken