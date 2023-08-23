import React from 'react'
import {TiPlus,TiMinus} from "react-icons/ti"
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { deleteCartItem,increaseQty,decreaseQty } from '../redux/productSlide'

const CartProduct = ({id,name,image,category,qty,total,price}) => {
    const dispatch =useDispatch()
  return (
    <div className='bg-slate-200 p-2 flex gap-4 rounded border border-slate-300'>
        <div className='bg-white p-3 rounded overflow-hidden'>
            <img src={image} className='h-28 w-40 object-cover'/>
        </div>
        <div className='flex flex-col justify-center px-6 w-full'>
            <h3 className='font-semibold text-slate-600 text-center py-4 capitalize text-lg'>{name}</h3>
            <div className='ml-auto cursor-pointer text-slate-700 hover:text-red-500' onClick={()=>dispatch(deleteCartItem(id))}>
                <AiFillDelete/>
            </div>
            <p className='text-center text-slate-500 font-medium'>{category}</p>
            <p className='text-center font-bold'><span className='text-red-500'>₹</span>{price}</p>
            <div className='flex justify-between '>
                <div className='flex gap-3 items-center'>
                <button onClick={()=>dispatch(increaseQty(id))} className='bg-slate-400 py-2 mt-4 rounded justify-center mx-auto p-1 min-w-[100px]'><TiPlus/></button>
                <p className='font-semibold p-1'>{qty}</p>
                <button className='bg-slate-400 py-2 mt-4 rounded justify-center mx-auto p-1 min-w-[100px]' onClick={()=>dispatch(decreaseQty(id))}><TiMinus/></button>
                </div>
                <div className='flex items-center gap-2 font-bold'>
                    <p>Total :</p>
                    <p><span className='text-red-500'>₹</span>{total}</p>
                </div>
            </div>
          </div>
    </div>
  )
}

export default CartProduct