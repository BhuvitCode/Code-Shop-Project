import React,{useState,useEffect} from 'react';
import product_context from './ProductsContext';
import { useParams } from 'react-router-dom';
import axios from 'axios'
// import { use } from '../../../backend/Routes/UserAccountRoutes';

const ProductState = (props) => {

    const [Categories,setCategories] = useState(['No Value Fetched']);
    const [SubCategories,setSubCategories] = useState(['No Value Fetched']);
    const [SignUpState,setSignUpState] = useState(['No Value Fetched2']);
    const [Products,setProuducts] = useState(['No Value Fetched']);
    const [SpecificProduct,setSpecificProduct] = useState(['No Value Fetched']);
    const [AccountDetails,setAccountDetails] = useState(['']);

    const [first, setfirst] = useState("second")
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

  const PostSignUpData = async (username,email,password, PhoneNumber, Country,Address, State,City,ConfirmPassword) => {
    const {data} = await axios.post(`http://localhost:8000/api/v1/Authentication/SignUp`, {username,email,password, PhoneNumber, Country,Address, State,City,ConfirmPassword},{headers: {'Content-Type': 'application/json'}});
    setSignUpState(data)
}

console.log(SignUpState);

const GetProductSpecificDetails = async (ProductId) => {
  const {data} = await axios.get(`http://localhost:8000/api/v1/ProductApi/GetAllProductsFullDetails/${ProductId}`, {},{headers: {'Content-Type': 'application/json'}});
  setSpecificProduct(data)
  console.log(data);
}
console.log(SpecificProduct);

const OrderProduct = async (ProductIdentifier,qty,TotalPrice,color) => {
    const {data} = await axios.post(`http://localhost:8000/api/v1/ProductApi/OrderProducts/${ProductIdentifier}`, {ProductTotalPrice:TotalPrice,ProductQuantity:qty,colorOfTheProduct:color,mode:'Cash'},{headers: {'Content-Type': 'application/json', 'Auth-Token':localStorage.getItem('UserAuthenticationToken')}});
  console.log(data);
}

const GetUserAccountInfo = async () => {
  const {data} = await axios.post(`http://localhost:8000/api/v1/Authentication/GetAccountInfo`,{first},{headers: {'Content-Type': 'application/json', 'Auth-Token':localStorage.getItem('UserAuthenticationToken')}});
  // console.log(data);
  setAccountDetails([data])
}

// console.log(AccountDetails);
// console.log(localStorage.getItem("UserAuthenticationToken"));  

  return (  
    <product_context.Provider value={{Categories,SubCategories,GetCategories,GetSubCategories,Products,GetAlProductsBySubCateAndCat,PostSignUpData,GetProductSpecificDetails,SpecificProduct,OrderProduct,AccountDetails,GetUserAccountInfo}}>
            
    {props.children}

    </product_context.Provider>

  )
}

export default ProductState