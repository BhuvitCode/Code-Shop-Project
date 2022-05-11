import React, { useEffect, useContext } from 'react'
import product_context from '../../context/ProductsContext';
import RedeemCode from '../RedeemCode';
import { useParams } from 'react-router-dom';

const RetrieveCouponCodeProps = () => {

  const GetContext = useContext(product_context)
  // Code,SearchCouponCode  
  const {productId2} = useParams();
  const { GetProductSpecificDetails,SpecificProduct} = GetContext;
  
  
  useEffect(() => {
      GetProductSpecificDetails(productId2);
      // SearchCouponCode()
  }, [])
  

  return (
    <>
    
    {SpecificProduct.map((SpecificProductArray) => {
            return <RedeemCode key={SpecificProductArray._id} SpecificProductArray={SpecificProductArray}></RedeemCode>        
          })}
    </>
  )
}

export default RetrieveCouponCodeProps