import React,{useState,useEffect} from 'react';
import product_context from './ProductsContext';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import DisplaySpecificProduct from '../components/DisplaySpecificProduct';
// import DisplaySpecificProduct from "components/DisplaySpecificProduct";

// import { use } from '../../../backend/Routes/UserAccountRoutes';

const ProductState = (props) => {

    const [Categories,setCategories] = useState(['No Value Fetched']);
    const [SubCategories,setSubCategories] = useState(['No Value Fetched']);
    const [SignUpState,setSignUpState] = useState(['No Value Fetched2']);
    const [Products,setProuducts] = useState(['No Value Fetched']);
    const [SpecificProduct,setSpecificProduct] = useState(['No Value Fetched']);
    const [AccountDetails,setAccountDetails] = useState(['']);
    const [OrderDetails,setOrderDetails] = useState(['No Value Fetched']);
    const [CartDetails,setCartDetails] = useState(['No Value Fetched']);
    const [Code, setCode] = useState([])

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

const OrderProductWithDiscount = async (ProductIdentifier2,qty2,TotalPrice2,color2) => {
  const {data} = await axios.post(`http://localhost:8000/api/v1/ProductApi/PlaceOrderWithRedeemCode/${ProductIdentifier2}`, {ProductTotalPrice:TotalPrice2,RedeemCode:363465,ProductQuantity:qty2,colorOfTheProduct:color2,mode:'Cash'},{headers: {'Content-Type': 'application/json', 'Auth-Token':localStorage.getItem('UserAuthenticationToken')}});
console.log(data);
}

const GetUserAccountInfo = async () => {
  const {data} = await axios.post(`http://localhost:8000/api/v1/Authentication/GetAccountInfo`,{},{headers: {'Content-Type': 'application/json', 'Auth-Token':localStorage.getItem('UserAuthenticationToken')}});
  // console.log(data);
  setAccountDetails([data])
}

const GetOrders = async () => {
  const {data} = await axios.get(`http://localhost:8000/api/v1/ProductApi/GetOrdersOFTheUsers`,{headers: {'Content-Type': 'application/json', 'Auth-Token':localStorage.getItem('UserAuthenticationToken')}});
  // console.log(data);
  setOrderDetails(data)
  console.log(OrderDetails);
}

const FetchWishListItems = async () => {
  const {data} = await axios.post(`http://localhost:8000/api/v1/ProductApi/GetAllWishListItems`,{},{headers: {'Content-Type': 'application/json', 'Auth-Token':localStorage.getItem('UserAuthenticationToken')}});
  // console.log(data);
  setCartDetails(data)
}

const SearchCouponCode = async () => {
  const {data} = await axios.post(`http://localhost:8000/api/v1/ProductApi/GetCouponCode`, {PriceReedemCode:363465},{headers: {'Content-Type': 'application/json'}});
  console.log(data);
  setCode(data)
}

// console.log(AccountDetails);
console.log(localStorage.getItem("UserAuthenticationToken"));  

  // {Code.map((CodeArray) => {
  //           return <DisplaySpecificProduct CodeArray={CodeArray}></DisplaySpecificProduct>
  //         })}
  return (  
    <product_context.Provider value={{Categories,SubCategories,GetCategories,GetSubCategories,Products,GetAlProductsBySubCateAndCat,PostSignUpData,GetProductSpecificDetails,SpecificProduct,OrderProduct,AccountDetails,GetUserAccountInfo,GetOrders,OrderDetails,FetchWishListItems,CartDetails,Code,SearchCouponCode,OrderProductWithDiscount}}>
            
    {props.children}

    </product_context.Provider>

  )
}

export default ProductState