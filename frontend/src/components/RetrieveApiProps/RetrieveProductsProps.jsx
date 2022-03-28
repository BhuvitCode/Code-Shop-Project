import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import product_context from '../../context/ProductsContext';
import DisplayProducts from '../DisplayProducts';

const RetrieveProductsProps = () => {

  const GetContext = useContext(product_context)

const { CategoryIdentifier, SubCat } = useParams();
const { Products, GetAlProductsBySubCateAndCat } = GetContext;


useEffect(() => {
  GetAlProductsBySubCateAndCat(CategoryIdentifier, SubCat);
}, [])

  return (
    <>
      {Products.map((ProductsArray) => {
        return <DisplayProducts key={ProductsArray._id} ProductsArray={ProductsArray}></DisplayProducts>
      })}
    </>
  )
}

export default RetrieveProductsProps