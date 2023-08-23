import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../component/cartProduct'
import {loadStripe} from '@stripe/stripe-js';

const Cart = () => {
    const productCartItem =useSelector((state)=>state.product.cartItem)

    const totalPrice = productCartItem.reduce((acc,curr)=>acc + parseInt(curr.total),0)
    const totalQty = productCartItem.reduce((acc,curr)=>acc + parseInt(curr.qty),0)

    const handlePayment = async()=>{
        const stripePromise = await loadStripe(process.env.REACT_APP_PUBLIC_KEY)
        const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/checkout-payment`,{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(productCartItem)
        })

        if(res.statusCode === 500) return;
        const data = await res.json()
        console.log(data)

        // alert("Redirecting to payment gateway.....!")
        stripePromise.redirectToCheckout({sessionId : data})

    }
  return (
    <div>
        <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your Cart Items</h2>
        <div className='my-4 flex gap-3'>
            {/* display cart items */}
            <div className='w-full max-w-3xl'>
                {
                    productCartItem.map(el =>{
                        return(
                            <CartProduct
                                key={el._id}
                                id={el._id}
                                name={el.name}
                                image={el.image}
                                category={el.category}
                                qty={el.qty}
                                total={el.total}
                                price={el.price}
                            />
                        )
                    })
                }
            </div>

            {/* Total cart items */}
            <div className="w-full max-w-md m-auto">
                <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
                <div className="flex w-full py-2 text-lg">
                    <p>Total Qty:</p>
                    <p className="ml-auto w-32 font-bold">{totalQty}</p>
                </div>
                <div className="flex w-full py-2 text-lg">
                    <p>Total Price:</p>
                    <p className="ml-auto w-32 font-bold"><span className='text-red-500'>₹</span>{totalPrice}</p>
                </div>
                <button className='bg-red-500 w-full text-lg font-bold py-2 text-white' onClick={handlePayment}>Payment</button>
            </div>
        </div>
    </div>
  )
}

export default Cart