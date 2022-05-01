import React from 'react'
import { useContext,useEffect } from 'react'
import product_context from '../context/ProductsContext'
const UserAccountInfo = (props) => {
    const {UserDetailArray} = props;

    // const GetContext = useContext(product_context)
    // const {GetUserAccountInfo} = GetContext 
    
    
  return (
    <>
        <div className="AccountContainer w-[100vw] h-[100vh]  flex justify-center items-center">
    
            <div className="account-content flex justify-center items-center flex-col">
                    <img src="https://m.media-amazon.com/images/I/61qUJTBmqWL._AC_UY327_FMwebp_QL65_.jpg" alt="" className='w-64'/>
                    <h1 className='font-bold text-lg'>Username-{UserDetailArray.username}</h1>
                    <h1 className='font-bold text-lg'>Email-{UserDetailArray.email}</h1>
                    <h1 className='font-bold text-lg'>PhoneNumber-{UserDetailArray.PhoneNumber}</h1>
                    <h1 className='font-bold text-lg'>Country-{UserDetailArray.Country}</h1>
                    <h1 className='font-bold text-lg'>Address-{UserDetailArray.Address}</h1>
                    <h1 className='font-bold text-lg'>State-{UserDetailArray.State}</h1>
                    <h1 className='font-bold text-lg'>City-{UserDetailArray.City}</h1>

            </div>

            
        </div>
    </>
  )
}

export default UserAccountInfo