import React from 'react'
import '../index.css'
import '../sample.css'
import Navbar from './Navbar'
import img from './img/m9.jpg'

const HomePage = () => {
  return (
    <> 
        {/* <div className='text-green-900 font-bold'>HomePage</div> */}
        
        <div className='flex'>
            {/* <Navbar/> */}
            {/* <div className="Navbar bg-[#1e90ff] text-white mt-3 ">
            <ul className="bg-black">
            <a href="">Home</a> 
                <a href="">Home</a>
                <a href="">Home</a>
                <a href="">Home</a>
            </ul>
        </div> */}

        
            <div className="h-24 pl-10 mt-40 mb-40 max-w-2xl ml-10">
                <h1 className='HomeHeading font-bold font-san'>Welcome To Code Shop</h1>
                <p className='ParaContent font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla harum voluptas expedita ullam voluptate aperiam quo quae sequi aliquid, facere sunt debitis consequuntur dolorum placeat mollitia ea illum sed eligendi error, accusantium eaque. Nulla, tempore aliquam aperiam est maiores vel harum minima delectus culpa, excepturi repellat.</p>
                <div className="Home-Btns mt-3">
                    <button className='Home-Btn bg-black text-white rounded-3xl py-1 px-4 text-sm hover:bg-[#1e90ff] hover:text-black hover:border-2 hover:border-black'>Order Now</button>
                </div>
            </div>

            <div className="img-div">
                <img className='w-[500px]' src={img} alt="" />
            </div>
        </div>
        
    </>
  )
}

export default HomePage