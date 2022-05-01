import React, { useEffect, useContext } from 'react'
import product_context from '../../context/ProductsContext';
import SubCategorie from '../SubCategorie';
import { useParams } from 'react-router-dom';

const RetrieveCategoriesProps = () => {
    const GetContext = useContext(product_context)

    const { SubCategories,GetSubCategories } = GetContext;
    const {CategoryId} = useParams();
    
    useEffect(() => {
        GetSubCategories(CategoryId);
    }, [])

    return (
        <>

            {SubCategories.map((SubCategoriesArray) => {
                return <SubCategorie key={SubCategoriesArray._id} SubCategoriesArray={SubCategoriesArray}></SubCategorie>
            })} 
            
        </>
    )
}

export default RetrieveCategoriesProps