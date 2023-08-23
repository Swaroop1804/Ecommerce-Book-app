import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AllProduct from '../component/AllProduct'
import { addCartItem } from '../redux/productSlide'

const Menu = () => {
  const { filterby } = useParams()
  const dispatch = useDispatch()
  const productData = useSelector(state => state.product.productList)
  console.log(productData)

  const productDisplay = productData.filter(el => el._id === filterby)[0]
  console.log(productDisplay)

  const handleAddCartProduct = () => {
    if (productDisplay) {
      dispatch(addCartItem(productDisplay))
    }
  }

  return (
    <div className='pt-4'>
      {productDisplay ? (
        <div className='max-w-2xl m-auto flex bg-white'>
          <div className='w-1/2 overflow-hidden'>
            <img src={productDisplay.image} className='hover:scale-105 transition-all' />
          </div>
          <div className='flex flex-col justify-center px-6'>
            <h3 className='font-semibold text-slate-600 text-center py-4 capitalize text-lg'>{productDisplay.name}</h3>
            <p className='text-center text-slate-500 font-medium'>{productDisplay.category}</p>
            <p className='text-center font-bold'><span className='text-red-500'>₹</span>{productDisplay.price}</p>
            <div className='flex gap-3'>
              <button className='bg-yellow-500 py-2 mt-4 rounded justify-center mx-auto'>Buy</button>
              <button className='bg-yellow-500 py-2 mt-4 rounded justify-center mx-auto' onClick={handleAddCartProduct}>Add to Cart</button>
            </div>
            <div>
              <p className='text-slate-600 font-medium'>Description:</p>
              <p>{productDisplay.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <AllProduct heading={"Related Product"} />
    </div>
  )
}

export default Menu
