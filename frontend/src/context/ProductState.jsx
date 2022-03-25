import React,{useState,useEffect} from 'react';
import product_context from './ProductsContext';
import axios from 'axios'

const ProductState = (props) => {

    const [Categories,setCategories] = useState(['No Value Fetched']);
    const GetCategories = async () => {
        const {data} = await axios.get('http://localhost:8000/api/v1/ProductApi/GetAllCategories');
        setCategories(data)
    }

    // useEffect(() => {
    //     GetCategories();    
    // }, [])
    
    // GetCategories();

  return (  
    <product_context.Provider value={{Categories,GetCategories}}>
            
    {props.children}

    

    </product_context.Provider>

  )
}

export default ProductState