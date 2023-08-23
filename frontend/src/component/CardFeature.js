import React from 'react';
import { Link } from 'react-router-dom';
import { addCartItem,increaseQty } from '../redux/productSlide';
import { useDispatch } from 'react-redux';
const CardFeature = ({ image, name, price, category,id}) => {
    const dispatch = useDispatch()
    const handleAddCartProduct = (e)=>{
        // e.stopPropagation()
        dispatch(addCartItem({
            _id : id,
            name : name,
            price : price,
            category : category,
            image : image
        }))
        // alert("hii")
    }
  return (
    <div className='w-full min-w-[280px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer'>
      <Link to={`/menu/${id}`}> {/* Replace '/product-details' with the desired destination URL */}
        <div className='h-28 flex justify-center'>
          <img src={image} className="h-full" />
        </div>
        <h3 className='font-semibold text-slate-600 text-center py-4 capitalize text-lg'>{name}</h3>
        <p className='text-center text-slate-500 font-medium'>{category}</p>
        <p className='text-center font-bold'><span className='text-red-500'>₹</span><span>{price}</span></p>

        </Link>
        <div className='flex justify-center'>
          <button className='bg-yellow-500 py-1 mt-2 rounded' onClick={handleAddCartProduct}>Add to Cart</button>
        </div>
    </div>
  );
};

export default CardFeature;
