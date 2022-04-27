import React,{useContext,useState} from 'react'
import { FaUserAlt } from 'react-icons/fa';
import product_context from '../context/ProductsContext';

const SignUp = () => {
    const context = useContext(product_context)
    const {PostSignUpData} = context;

    const [SignupDetails, setSignupDetails] = useState({username:"",email:"",password:"", PhoneNumber:"", Country:"",Address:"", State:"",City:"",ConfirmPassword:""})

    const SumbitSignUpFormData = (e) =>{
        
        e.preventDefault()
        
        PostSignUpData(SignupDetails.username,SignupDetails.email,SignupDetails.password, SignupDetails.PhoneNumber, SignupDetails.Country,SignupDetails.Address, SignupDetails.State,SignupDetails.City,SignupDetails.ConfirmPassword)
        
        alert("Sign Up Successfully")
        // console.log("hello")
    }

    const onchange = (e) =>{
        setSignupDetails({...SignupDetails,[e.target.name]:e.target.value})
    }

    return (
        <>

               <h1 className='text-xl font-bold text-center '>Create Your Account</h1>
            <form action="" className='w-[100vw] h-[100vh] flex justify-center items-center'>
                <div className="w-72 flex-col mb-2 mt-10">
                    <div className="mb-7">
                    
                        <input type="text" id="username" name="username" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='username' onChange={onchange}/>
                    </div>

                    <div className="mb-7">
                    
                    <input type="text" id="email" name="email" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='email' onChange={onchange}/>
                </div>

                <div className="mb-7">
                    
                    <input type="password" id="password" name="password" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='password' onChange={onchange}/>
                </div>

                <div className="mb-7">
                    
                    <input type="text" id="PhoneNumber" name="PhoneNumber" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='PhoneNumber' onChange={onchange}/>
                </div>

                <div className="mb-7">
                    
                    <input type="text" id="Country" name="Country" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Country' onChange={onchange}/>
                </div>

                <div className="mb-7">
                    
                    <input type="text" id="Address" name="Address" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ri*ng-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Address' onChange={onchange}/>
                </div>

                <div className="mb-7">
                    
                    <input type="text" id="State" name="State" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='State' onChange={onchange}/>
                </div>

                <div className="mb-7">
                    
                    <input type="text" id="City" name="City" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='City' onChange={onchange}/>
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

export default SignUp