import React,{useState,useContext} from 'react'
import product_context from '../context/ProductsContext';
import { useParams } from 'react-router-dom';
const DisplaySpecificProduct = (props) => {
  const {SpecificProductArray} = props;

  const GetContext = useContext(product_context)

  const { productId } = useParams();
  const { OrderProduct } = GetContext;

  const [Quantity, setQuantity] = useState(0)
  const [Price, setPrice] = useState(SpecificProductArray.product_price)
  // const [Color, setColor] = useState('')

  const IncrementQty = ()=>{
    setQuantity(Quantity+1)
    setPrice(SpecificProductArray.product_price*Quantity)
  }

  const BuyNow = (e)=>{
    e.preventDefault()
    OrderProduct(productId,Quantity,Price,'Red')
    alert("Sign Up Successfully")

  }

  const a = ()=>{
    alert("Sign Up Successfully")

  }
// console.log(Quantity)
  return (
    <>
    {/* <button classonClick={a}>hello</button> */}
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
        
                        <p className='font-bold text-lg'>Color -
                <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button></p>


                    <p className='font-bold text-lg'>Size - 
                    <button class="border-2 bg-black rounded-full w-7 h-7 focus:outline-none ml-3 text-white text-sm">L</button>

                    <button class="border-2 bg-black rounded-full w-7 h-7 focus:outline-none ml-1 font-bold text-white text-sm">ML</button>

                    <button class="border-2 bg-black rounded-full w-7 h-7 focus:outline-none ml-1 font-bold text-white text-sm">XL</button>

                    <button class="border-2 bg-black rounded-full w-7 h-7 focus:outline-none ml-1 font-bold text-white text-sm">XXL</button>
                    </p>
                    
                    <p className="text-lg font-bold">Qty:-
                    <button class="border-2 bg-black focus:outline-none ml-1 font-bold text-white text-sm" onClick={IncrementQty}>Incremet Qty:-{Quantity}</button>
                    </p>

                    <p className='font-bold text-xl'>₹{Price}</p>
                    <button className='mt-3 bg-black text-white px-2 py-2 rounded-lg'>Add To Cart </button>

                    <button className='mt-3 bg-black text-white px-2 py-2 rounded-lg ml-3' onClick={BuyNow}>Buy Now</button>

                    <div className="Review-Section">

                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default DisplaySpecificProduct