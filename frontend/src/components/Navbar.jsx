import React from "react";
import '../index.css';
import img1 from './img/352002_account_circle_icon.png'
import img2 from './img/372896_cart_full_products_round_icon (1).png'
// import img3 from './img/outline_local_shipping_black_24dp.png'
const Navbar = () => {
    return (
        <>
            <nav className="Navbar text-black flex items-center justify-center">
                <ul className="mt-5  w-[70vw] flex items-center h-8 rounded-3xl justify-center">
                    <li></li><a className='p-5' href="/home">Home</a><li></li>
                    <li></li><a className='p-5' href="/about">about</a><li></li>
                    <li></li><a className='p-5' href="/services">services</a><li></li>
                    <li></li><a className='p-5' href="/contact us">contact us</a><li></li>

                    <div className="NavButton ml-14 relative left-[29%]">
                        <img className='w-10' src={img1} alt="img" />
                    </div>

                    {/* <div className="flex relative left-44">
                        <img className='w-9 ml-36' src={img3}></img>
                    </div> */}

                    <div className="flex relative left-[4%] right-10">
                        <img className='w-9 ml-36' src={img2} alt="img"></img>
                    </div>

                    <div>

                    </div>

                    {/* bg-[#1e90ff] */}
                    {/* <li>About</li>
                <li>Sevices</li>
                <li>Contact Us</li> */}
                    {/* <li></li> */}
                </ul>
            </nav>
        </>
    )
}

export default Navbar