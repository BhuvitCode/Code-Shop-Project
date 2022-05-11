import React,{useContext,useState} from 'react'
import { FaUserAlt } from 'react-icons/fa';
import product_context from '../context/ProductsContext';
import axios from 'axios';
const Login = () => {
    const PostLoginData = async () => {
        const {data} = await axios.post(`http://localhost:8000/api/v1/Authentication/Login`, {email: LoginDetails.email,password: LoginDetails.password},{headers: {'Content-Type': 'application/json'}});

        console.log(data.UserAuthToken) 
        localStorage.setItem('UserAuthenticationToken',data.UserAuthToken)

    }

    const [LoginDetails, setLoginDetails] = useState({email:"",password:"",ConfirmPassword:""})

    const SumbitSignUpFormData = (e) =>{
        e.preventDefault()

        if(LoginDetails.email === "" || LoginDetails.password === "" || LoginDetails.ConfirmPassword === ""){
            alert("Please Fill All Fields!!")
        }

        else if(LoginDetails.password !== LoginDetails.ConfirmPassword){
            alert("Enter Vaild Credentials!!")
        }
        
        else{
            alert("Login Successfully!!")
            PostLoginData()
        }
        // PostSignUpData(SignupDetails.username,SignupDetails.email,SignupDetails.password, SignupDetails.PhoneNumber, SignupDetails.Country,SignupDetails.Address, SignupDetails.State,SignupDetails.City,SignupDetails.ConfirmPassword)
        

        // console.log("hello")
    }

    const onchange = (e) =>{
        setLoginDetails({...LoginDetails,[e.target.name]:e.target.value})
    }


  return (
    <>
        <h1 className='text-xl font-bold text-center '>Create Your Account</h1>
            <form action="" className='w-[100vw] h-[100vh] flex justify-center items-center'>
                <div className="w-72 flex-col mb-2 mt-10">


                    <div className="mb-7">
                    
                    <input type="text" id="email" name="email" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='email' onChange={onchange}/>
                </div>

                <div className="mb-7">
                    
                    <input type="password" id="password" name="password" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='password' onChange={onchange}/>
                </div>


                <div className="mb-7">
                    
                    <input type="password" id="ConfirmPassword" name="ConfirmPassword" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='ConfirmPassword' onChange={onchange}/>
                </div>
                    
                    <button onClick={SumbitSignUpFormData}>hello</button>
                </div>
            </form>
    </>
  )
}

export default Login