import React,{useState,useContext,useEffect} from 'react'
import product_context from '../context/ProductsContext';
import { useParams } from 'react-router-dom';
import axios from 'axios'


const RedeemCode = (props) => {
    const {SpecificProductArray,CodeArray} = props;
    const [DiscountCode, setDiscountCode] = useState({ CouponCode: ""})

  const GetContext = useContext(product_context)

  const { productId2 } = useParams();
  const { OrderProduct,OrderProductWithDiscount } = GetContext;

  const [Quantity, setQuantity] = useState(0)
  const [Price, setPrice] = useState(SpecificProductArray.product_price)

  const onchange = (e) => {
    // e.preventDefault()
    setDiscountCode({ ...DiscountCode, [e.target.name]: e.target.value })
}

  const IncrementQty = ()=>{
    setQuantity(Quantity+1)
    setPrice(SpecificProductArray.product_price*Quantity)
  }

  const BuyNow = (e)=>{
    e.preventDefault()
    OrderProduct(productId2,Quantity,Price,'Red',DiscountCode.CouponCode)
    alert("Sign Up Successfully")
  }

  const BuyDiscountedProduct = (e)=>{
    e.preventDefault()
    OrderProductWithDiscount(productId2,Quantity,Price,'Red')
  }


  //  const falana = ()=>{
  //     this-this
  //  }

  const a = ()=>{
    alert("Sign Up Successfully")

  }


  
  


  const AddCartItem = async (productId2) => {
    const {data} = await axios.post(`http://localhost:8000/api/v1/ProductApi/AddToWishList/${productId2}`, {CartQty:Quantity},{headers: {'Content-Type': 'application/json', 'Auth-Token':localStorage.getItem('UserAuthenticationToken')}});
  console.log(data);
}

 const ClickToAddCartItem = (e)=>{
   e.preventDefault()
    AddCartItem(productId2)
    
 }

  return (
    <>
          <section className='Specific Product Section flex'>
            <div className='container'>
                <div className="img-section my-20 mx-24 flex">
                    <img src='https://dummyimage.com/330x400' className="" alt="" />
                    <div className="product-Headings flex-col mx-8 my-14">
                    <h1 className='font-extrabold text-2xl'>{SpecificProductArray.product_name}</h1>
                    <p className='font-bold text-lg'>{SpecificProductArray.product_Owned_By_Company_Name}</p>
                    <p className='font-semibold'>{SpecificProductArray.product_Desc}</p>

                    <div class="flex mb-4 mt-3">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          </span>
        </div>      
                    <p className="text-lg font-bold">Qty:-
                    <button class="border-2 bg-black focus:outline-none ml-1 font-bold text-white text-sm" onClick={IncrementQty}>Incremet Qty:-{Quantity}</button>
                    </p>

                    <p className='font-bold text-xl'>₹{Price}</p>
                    <button className='mt-3 bg-black text-white px-2 py-2 rounded-lg' onClick={ClickToAddCartItem}>Add To Cart </button>

                    <button className='mt-3 bg-black text-white px-2 py-2 rounded-lg ml-3' onClick={BuyNow}>Buy Now</button>

                    <button className='mt-3 bg-black text-white px-2 py-2 rounded-lg ml-3' onClick={BuyDiscountedProduct}
                     
                    >Redeem</button>

<div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Redeem Code</label>
        <input type="text" id="CouponCode" name="CouponCode" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={onchange}/>
      </div>
                    

                    <div className="Review-Section">

                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default RedeemCode


// import React from 'react'
// import { useParams } from 'react-router-dom'
// const RedeemCode = () => {
//     const { productId2 } = useParams()

//   return (
//     <>
//          <section className='Specific Product Section flex'>
//              <div className='container'>
//                  <div className="img-section my-20 mx-24 flex">
//                      <img src='https://dummyimage.com/330x400' className="" alt="" />
//                      <div className="product-Headings flex-col mx-8 my-14">
//                     <h1 className='font-extrabold text-2xl'></h1>
//                      <p className='font-bold text-lg'></p>
//                     <p className='font-semibold'></p>

//                     <div class="flex mb-4 mt-3">
//          <span class="flex items-center">
//             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
//                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//              </svg>
//           <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
// //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//              </svg>
//              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
//              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
//             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//              </svg>
//             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
//                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//              </svg>
//            </span>
//          </div>      
//                      <p className="text-lg font-bold">Qty:-                     <button class="border-2 bg-black focus:outline-none ml-1 font-bold text-white text-sm" >Incremet Qty:-</button>
//                      </p>

//                      <p className='font-bold text-xl'>₹</p>
//                    <button className='mt-3 bg-black text-white px-2 py-2 rounded-lg'>Add To Cart </button>

//                  <button className='mt-3 bg-black text-white px-2 py-2 rounded-lg ml-3' >Buy Now</button>

//                <button className='mt-3 bg-black text-white px-2 py-2 rounded-lg ml-3'
                     
//                     >Redeem</button>
                    

//                     <div className="Review-Section">

//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </section>
//     </>
//   )
// }

// export default RedeemCode