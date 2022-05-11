import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import product_context from '../../context/ProductsContext';
import WishList from '../WishList';

const RetrieveCartApiProps = () => {
    
    const GetContext = useContext(product_context)

    // const {productId} = useParams();
    const { FetchWishListItems,CartDetails } = GetContext;
    
    
    useEffect(() => {
        FetchWishListItems();
    }, [])

  return (
    <>
        {CartDetails.map((CartArray) => {
            return <WishList key={CartArray._id} CartArray={CartArray}></WishList>
          })}
    </>
  )
}

export default RetrieveCartApiProps