import React from 'react'

const DisplayProducts = (props) => {

  const {ProductsArray} = props;
  
  return (
    <>
        <section className="ProductsSection flex">
            <div className="Products-Container">
                <div className="Product1 w-[52vw] h-[33vh] bg-white mt-24 ml-20 flex">
                    <img src={ProductsArray.product_image_url} alt="" className='w-72 h-52'/>

                    <div className="product-content ml-10">
                      <h1 className='Product-Name font-bold text-2xl'>{ProductsArray.product_name}</h1>
                      <p className='font-bold text-lg'>Brand- {ProductsArray.product_Owned_By_Company_Name}</p>
                      <p className='Product Description text-md font-medium'>{ProductsArray.product_Desc}</p>

                      <p className='font-semibold'>5 star rating</p>
                      <p className='font-bold'>₹{ProductsArray.product_price}</p>


                      <div className="btns flex">
                        <button className='px-3 bg-black mt-4 rounded-full text-white py-1'>View Product</button>

                        <button className='px-3 bg-black mt-4 rounded-full text-white py-1 ml-3'>Add To Cart</button>
                      </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default DisplayProducts