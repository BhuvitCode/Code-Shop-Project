import React from 'react'
import '../sample.css'
import img4 from './img/3428069_device_laptop_notebook_pc_icon.png'
import img from './img/m9.jpg'
import img5 from './img/07.jpg'
import img6 from './img/vecteezy_happy-woman-shopping-clothing-with-cart_.jpg'
import img7 from './img/vector-free-furniture-icon-set.jpg'
import img8 from './img/education_books_01_generated.jpg'
import img9 from './img/2581_R0lVIEFOTiAxNzYtNjk.jpg'
import {Link} from 'react-router-dom'

const Category = (props) => {

    const {CategoriesArray} = props

  return (
    <>
        <section className="Category-Section">
            <h1 className='text-4xl font-bold text-center mt-10'>Product Categories</h1>
            {/* <p className='text-4xl font-bold text-center'>↓</p> */}
            <div className="Category-Container flex flex-wrap justify-center items-center mt-16">
                <div className="Categorie1 w-72 h-72 bg-white flex-col shadow-lg justify-center mt-12 mx-10">
                <img src={"https://m.media-amazon.com/images/I/61b7BGoOACL._AC_SY200_.jpg"} className='w-32 ml-24' alt="" />
                    <h1 className="CategoryName text-xl mt-10 ml-3 font-bold" alt='img'>{CategoriesArray.category_name}</h1>

                    <p className="CategoryName text-sm ml-3 font-bold">Find Your Favrouite Electronic Itmes With Discount Like Phones,Laptops,Tablets etc.Here</p>

                    <Link to={`/Sub-Categories/${CategoriesArray.category_name}`}><button className='px-3 bg-black mt-4 ml-3 rounded-3xl text-white py-1'>View Products</button></Link>
                </div>

                <div className="Categorie1 w-72 h-72 bg-white flex-col shadow-lg justify-center mt-12 mx-10">
                <img src={img5} className='w-32 ml-24' alt='img' />
                    <h1 className="CategoryName text-xl mt-10 ml-3 font-bold">Furniture</h1>

                    <p className="CategoryName text-sm ml-3 font-bold">Find Your Favrouite Electronic Itmes With Discount Like Phones,Laptops,Tablets etc.Here</p>

                    <button className='px-3 bg-black mt-4 ml-3 rounded-3xl text-white py-1'>View Products</button>
                </div>

                <div className="Categorie1 w-72 h-72 bg-white flex-col shadow-lg justify-center mt-12 mx-10">
                <img src={img6} className='w-32 ml-24' alt='img' />
                    <h1 className="CategoryName text-xl mt-10 ml-3 font-bold">Clothing</h1>

                    <p className="CategoryName text-sm ml-3 font-bold">Find Your Favrouite Electronic Itmes With Discount Like Phones,Laptops,Tablets etc.Here</p>

                    <button className='px-3 bg-black mt-4 ml-3 rounded-3xl text-white py-1'>View Products</button>
                </div>

                <div className="Categorie1 w-72 h-72 bg-white flex-col shadow-lg justify-center mt-12 mx-10">
                <img src={img7} className='w-32 ml-24' alt='img' />
                    <h1 className="CategoryName text-xl mt-10 ml-3 font-bold">Home Appliances</h1>

                    <p className="CategoryName text-sm ml-3 font-bold">Find Your Favrouite Electronic Itmes With Discount Like Phones,Laptops,Tablets etc.Here</p>

                    <button className='px-3 bg-black mt-4 ml-3 rounded-3xl text-white py-1'>View Products</button>
                </div>

                <div className="Categorie1 w-72 h-72 bg-white flex-col shadow-lg justify-center mt-12 mx-10">
                <img src={img8} className='w-32 ml-24' alt='img' />
                    <h1 className="CategoryName text-xl mt-10 ml-3 font-bold">Books</h1>

                    <p className="CategoryName text-sm ml-3 font-bold">Find Your Favrouite Electronic Itmes With Discount Like Phones,Laptops,Tablets etc.Here</p>

                    <button className='px-3 bg-black mt-4 ml-3 rounded-3xl text-white py-1'>View Products</button>
                </div>

                <div className="Categorie1 w-72 h-72 bg-white flex-col shadow-lg justify-center mt-12 mx-10">
                <img src={img9} className='w-32 ml-24' alt='img' />
                    <h1 className="CategoryName text-xl mt-10 ml-3 font-bold">Groceries</h1>

                    <p className="CategoryName text-sm ml-3 font-bold">Find Your Favrouite Electronic Itmes With Discount Like Phones,Laptops,Tablets etc.Here</p>

                    <button className='px-3 bg-black mt-4 ml-3 rounded-3xl text-white py-1'>View Products</button>
                </div>

            </div>
        </section>
    </>
  )
}

export default Category