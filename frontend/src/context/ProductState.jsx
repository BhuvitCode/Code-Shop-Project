import React,{useState,useEffect} from 'react';
import product_context from './ProductsContext';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const ProductState = (props) => {

    const [Categories,setCategories] = useState(['No Value Fetched']);
    const [SubCategories,setSubCategories] = useState(['No Value Fetched']);

    const [Products,setProuducts] = useState(['No Value Fetched']);

    const GetCategories = async () => {
        const {data} = await axios.get('http://localhost:8000/api/v1/ProductApi/GetAllCategories');
        setCategories(data)
    }

    // console.log(Categories)

    const GetSubCategories = async (CategoryId) => {
        const {data} = await axios.get(`http://localhost:8000/api/v1/ProductApi/GetAllSubCategoriesByCategore/${CategoryId}`);
        setSubCategories(data)
    }

    const GetAlProductsBySubCateAndCat = async (CategoryIdentifier,SubCat) => {
      const {data} = await axios.get(`http://localhost:8000/api/v1/ProductApi/GetAllProducts/${CategoryIdentifier}/${SubCat}`);
      setProuducts(data)
  }

  return (  
    <product_context.Provider value={{Categories,SubCategories,GetCategories,GetSubCategories,Products,GetAlProductsBySubCateAndCat}}>
            
    {props.children}


    </product_context.Provider>

  )
}

export default ProductState