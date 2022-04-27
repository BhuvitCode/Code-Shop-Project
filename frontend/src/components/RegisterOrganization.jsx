import React,{useState} from 'react'
import axios from 'axios'

const RegisterOrganization = () => {
    // const context = useContext(product_context)
    // const {PostSignUpData} = context;

    const [OrgDetails, setOrgDetails] = useState({Oraganization_Name:"",Oraganization_Email:"",Oraganization_Helpline_PhoneNumber:"",Oraganization_HeadQuater_Address:"",Organization_Founder_Name:"",Organization_Password:"", Organization_Description:"",ConfirmPassword:""})

    const [ShowPssword, setShowPssword] = useState("password")

    const PostOrgData = async () => {
        const {data} = await axios.post(`http://localhost:8000/api/v1/OrganizationApi/CreateOrganization`, {Oraganization_Name: OrgDetails.Oraganization_Name,Oraganization_Email: OrgDetails.Oraganization_Email,Oraganization_Helpline_PhoneNumber:OrgDetails.Oraganization_Helpline_PhoneNumber,Oraganization_HeadQuater_Address:OrgDetails.Oraganization_HeadQuater_Address,Organization_Founder_Name:OrgDetails.Organization_Founder_Name, Organization_Password:OrgDetails.Organization_Password,Organization_Description:OrgDetails.Organization_Description,ConfirmPassword:OrgDetails.ConfirmPassword},{headers: {'Content-Type': 'application/json'}});

        console.log(data)
    }

    const unhidePassword = (e) =>{
        e.preventDefault()
        if(ShowPssword === "password"){
            setShowPssword("text")
        }
        if(ShowPssword === "text"){
            setShowPssword("password")
        }
    }
    const SumbitOrgSignUpData = (e) =>{
        PostOrgData()
        e.preventDefault()
        
        alert("Sign Up Successfully")
    }

    const onchange = (e) =>{
        setOrgDetails({...OrgDetails,[e.target.name]:e.target.value})
    }

    return (
        <>
        {/* Oraganization_Name:"",Oraganization_Email:"",Oraganization_Helpline_PhoneNumber:"",Oraganization_HeadQuater_Address:"",Organization_Founder_Name:"",Organization_Password:"", Organization_Description:"",ConfirmPassword:"" */}
        <div className="Alert-Container bg-black max-w-xl
         h-14">

        </div>
               <h1 className='text-xl font-bold text-center mt-24 '>Create Your Account</h1>
            <form action="" className='w-[100vw] h-[100vh] flex justify-center items-center'>
                <div className="w-72 flex-col">
                    <div className="mb-7">
                    
                        <input type="text" id="Oraganization_Name" name="Oraganization_Name" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Oraganization_Name' onChange={onchange}/>
                    </div>

                    <div className="mb-7">
                    
                    <input type="text" id="Oraganization_Email" name="Oraganization_Email" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Oraganization_Email' onChange={onchange}/>
                </div>

                <div className="mb-7">
                    
                    <input type="password" id="Oraganization_Helpline_PhoneNumber" name="Oraganization_Helpline_PhoneNumber" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Oraganization_Helpline_PhoneNumber' onChange={onchange}/>
                </div>

                <div className="mb-7">
                    
                    <input type="text" id="Oraganization_HeadQuater_Address" name="Oraganization_HeadQuater_Address" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Oraganization_HeadQuater_Address' onChange={onchange}/>
                </div>

                <div className="mb-7">
                    
                    <input type="text" id="Organization_Founder_Name" name="Organization_Founder_Name" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Organization_Founder_Name' onChange={onchange}/>
                </div>

                <div className="mb-7">
                    
                    <input type={ShowPssword} id="Organization_Password" name="Organization_Password" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ri*ng-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Organization_Password' onChange={onchange}/>
                </div>

                <div className="mb-7">
                    
                    <input type="text" id="Organization_Description" name="Organization_Description" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Organization_Description' onChange={onchange}/>
                </div>

                <div className="mb-7">
                    
                    <input type="text" id="ConfirmPassword" name="ConfirmPassword" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='ConfirmPassword' onChange={onchange}/>
                </div>
                    <button onClick={SumbitOrgSignUpData}>hello</button>
                    <button onClick={unhidePassword}>Show Password</button>
                </div>
            </form>
        </>
    )
}

export default RegisterOrganization