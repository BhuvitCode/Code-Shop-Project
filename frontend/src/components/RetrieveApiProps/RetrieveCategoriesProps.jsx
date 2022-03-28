import React, { useEffect, useContext } from 'react'
import product_context from '../../context/ProductsContext';
import Category from '../Category';

const RetrieveCategoriesProps = () => {
    const GetContext = useContext(product_context)

    const { Categories,GetCategories } = GetContext;

    
    useEffect(() => {
        GetCategories();
    }, [])



    return (
        <>

            {Categories.map((CategoriesArray) => {
                return <Category key={CategoriesArray._id} CategoriesArray={CategoriesArray}></Category>
                // console.log(CategoriesArray)
            })}
            
        </>
    )
}

export default RetrieveCategoriesProps