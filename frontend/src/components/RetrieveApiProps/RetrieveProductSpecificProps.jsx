import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import product_context from '../../context/ProductsContext';
import DisplaySpecificProduct from '../DisplaySpecificProduct';
import RedeemCode from '../RedeemCode';

const RetrieveProductSpecificProps = () => {
    const GetContext = useContext(product_context)
    // Code,SearchCouponCode  
    const {productId} = useParams();
    const { GetProductSpecificDetails,SpecificProduct} = GetContext;
    
    
    useEffect(() => {
        GetProductSpecificDetails(productId);
        // SearchCouponCode()
    }, [])
    
      return (
        <>

          {SpecificProduct.map((SpecificProductArray) => {
            return <DisplaySpecificProduct key={SpecificProductArray._id} SpecificProductArray={SpecificProductArray}></DisplaySpecificProduct>
          })}

      

        </>
      )
}

export default RetrieveProductSpecificProps