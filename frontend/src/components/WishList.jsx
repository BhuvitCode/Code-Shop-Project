import React from 'react'

const WishList = (props) => {

    const {CartArray} = props;
    console.log(Math.floor(Math.random() * 1000000 + 1));

  return (
    <>
    
        <div className="sliderbar flex justify-end items-end">
         
        </div>

        <div className="Wishlist-container">            
            <div className="Wishlist-items flex mr-24 ml-24">
            <img src="https://m.media-amazon.com/images/I/61qUJTBmqWL._AC_UY327_FMwebp_QL65_.jpg" alt="" className='w-64 mt-24'/>
                <div className="Wishlist-content mt-24 ml-3">
                <h1 className='font-extrabold text-xl'>{CartArray.Product_Name}</h1>
                <p className='text-lg font-semibold'>{CartArray.Product_Price}</p>
                <p className='text-lg font-semibold'>{CartArray.Product_Stock}</p>
                {/* <p className='text-lg font-semibold'>{CartArray.Product_Name}</p> */}
                    <div className="btns flex">
                    <button className='mt-3 bg-black text-white px-1 py-1'>Check Out</button>
                    <button className='mt-3 bg-black text-white px-1 py-1  ml-3'>Delete Item</button>
                </div>
                </div>
            </div>
        </div>

        <div className="slidebar-content ml-24 mt-12">
            <h1 className='text-xl font-bold'>Subtotal (1 item):₹1,349.00</h1>
        </div>
    </>
  )
}

export default WishList