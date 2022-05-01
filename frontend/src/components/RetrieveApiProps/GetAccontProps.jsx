import React, { useEffect, useContext } from 'react'
import product_context from '../../context/ProductsContext';
import UserAccountInfo from '../UserAccountInfo';
const GetAccontProps = () => {
    const GetContext = useContext(product_context)

    const { AccountDetails, GetUserAccountInfo } = GetContext;
    useEffect(() => {
        GetUserAccountInfo()
    }, [])


    return (
        <>
            {AccountDetails.map((UserDetailArray) => {
                return <UserAccountInfo key={UserDetailArray._id} UserDetailArray={UserDetailArray}></UserAccountInfo>
            })}
        </>
    )
}

export default GetAccontProps