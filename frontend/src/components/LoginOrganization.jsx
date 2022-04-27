import React,{useState} from 'react'
import axios from 'axios'

const LoginOrganization = () => {
    const [OrgLoginDetails, setOrgLoginDetails] = useState({email:"",password:"",ConfirmPassword:""})

    const PostOrgLoginData = async () => {
        const {data} = await axios.post(`http://localhost:8000/api/v1/OrganizationApi/LoginIntoOrganization`, {Oraganization_Email:OrgLoginDetails.email, Organization_Password:OrgLoginDetails.password,ConfirmPassword:OrgLoginDetails.ConfirmPassword},{headers: {'Content-Type': 'application/json'}});

        console.log(data)
    }


    const SumbitOrgLoginUpData = (e) =>{
        PostOrgLoginData()
        e.preventDefault()
        
        alert("Login Successfully")
    }

    const onchange = (e) =>{
        setOrgLoginDetails({...OrgLoginDetails,[e.target.name]:e.target.value})
    }

    return (
        <>
               <h1 className='text-xl font-bold text-center mt-24 '>Create Your Account</h1>
            <form action="" className='w-[100vw] h-[100vh] flex justify-center items-center'>
                <div className="w-72 flex-col">
                    <div className="mb-7">
                        <input type="text" id="email" name="email" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='email' onChange={onchange}/>
                    </div>

                    <div className="mb-7">
                        <input type="text" id="password" name="password" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='password' onChange={onchange}/>
                    </div>

                    <div className="mb-7">
                        <input type="text" id="ConfirmPassword" name="ConfirmPassword" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='ConfirmPassword' onChange={onchange}/>
                    </div>

                    <button onClick={SumbitOrgLoginUpData}>hello</button>
                    {/* <button onClick={unhidePassword}>Show Password</button> */}
                </div>
            </form>
        </>
    )
}

export default LoginOrganization