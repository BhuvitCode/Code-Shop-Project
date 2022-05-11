import React from 'react'

const OrdersPage = (props) => {
  const {OrderDetailsArray} = props
  return (
    <>
            <h1>Orders Page</h1>
        <div className="OrderItems">

            <div className="sliderbar flex justify-end items-end">
         
         </div>
 
         <div className="Wishlist-container">            
             <div className="Wishlist-items flex mr-24 ml-24">
             <img src="https://m.media-amazon.com/images/I/61qUJTBmqWL._AC_UY327_FMwebp_QL65_.jpg" alt="" className='w-64 mt-24'/>
                 <div className="Wishlist-content mt-24 ml-3">
                 <h1 className='font-extrabold text-xl'>{OrderDetailsArray.NameOFProduct}</h1>
                 <p className='text-lg font-semibold'>Price:- ₹{OrderDetailsArray.ProductTotalPrice}</p>
                 <p className='text-lg font-semibold'>Qty:- 5</p>
                 <p className='text-lg font-semibold'>Colour:- Black</p>
                     {/* <div className="btns flex">
                     <button className='mt-3 bg-black text-white px-1 py-1'>Check Out</button>
                     <button className='mt-3 bg-black text-white px-1 py-1  ml-3'>Delete Item</button>
                 </div> */}
                 </div>
             </div>
         </div>

        </div>
    </>
  )
}

export default OrdersPage



        {/* <div className="Container w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="OrderContent bg-gray-500 w-[70vw] h-[80vh]">
                <div className="flex-col flex items-end mt-10">
                    <h1>hello</h1>
                    <h1>hello</h1>
                    <h1>hello</h1>
                    <h1>hello</h1>
                </div>
            </div>
        </div> */}