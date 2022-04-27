import React from 'react'

const WishList = () => {
  return (
    <>
    
        <div className="sliderbar flex justify-end items-end">
         
        </div>

        <div className="Wishlist-container">            
            <div className="Wishlist-items flex mr-24 ml-24">
            <img src="https://m.media-amazon.com/images/I/61qUJTBmqWL._AC_UY327_FMwebp_QL65_.jpg" alt="" className='w-64 mt-24'/>
                <div className="Wishlist-content mt-24 ml-3">
                <h1 className='font-extrabold text-xl'>Puma New Stylish T-Shirt With Costly Fabric</h1>
                <p className='text-lg font-semibold'>Price:- ₹50,000</p>
                <p className='text-lg font-semibold'>Qty:- 5</p>
                <p className='text-lg font-semibold'>Colour:- Black</p>
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