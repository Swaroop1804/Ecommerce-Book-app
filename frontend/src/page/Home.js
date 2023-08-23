import React, { useEffect, useState } from 'react'
import bikeI from "../assest/bike.png"
import HomeCard from '../component/HomeCard'
import { useSelector } from 'react-redux'
import CardFeature from '../component/CardFeature'
import {ImBooks} from "react-icons/im"
import FilterProduct from '../component/FilterProduct'
import AllProduct from '../component/AllProduct'
const Home = () => {
  const productData=useSelector((state)=>state.product.productList)
  // console.log(productData)
  const homeProductCartList = productData.slice(0,4);
  const homeProductCartListfebooks = productData.filter(el=>el.category ==="fe-books",[])
  // console.log(homeProductCartListfebooks)

  

  
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2 py-4">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
            <img src={bikeI} className='h-7' />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">The Fastest Delivery At <span className="text-red-600">Your Home</span></h2>
          <p className='py-3 text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md'>Order Now</button>
        </div>
        <div className="md:w-1/2 flex felx-wrap gap-6 p-4 justify-center">
          {
            homeProductCartList[0] && homeProductCartList.map(el =>{
              return(
                <HomeCard
                  key={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              )
            })
          }
        </div>
      </div>
      <div className=''>
        <h2 className="font-bold text-2xl text-slate-800 ">FE Books</h2>
        <div className='grid grid-cols-4 gap-4 '>
          {
            homeProductCartListfebooks.map(el =>{
              return(
                <CardFeature
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              )
            })
          }
            {/* <CardFeature/> */}
        </div>
      </div>

      <AllProduct heading={"Your Product"}/>
    </div>
  )
}

export default Home