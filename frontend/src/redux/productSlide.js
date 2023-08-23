import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList : [],
    cartItem : []
}
export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        setDataProduct : (state,action)=>{
            state.productList = [...action.payload]
        },
        addCartItem : (state,action)=>{
            console.log(action);
            const total =action.payload.price
            state.cartItem = [...state.cartItem,{...action.payload,qty : 1,total : total}]
        },
        deleteCartItem : (state,action)=>{
            console.log(action.payload)
            alert("one item deleted")
            const index=state.cartItem.findIndex((el)=>el._id === action.payload)
            state.cartItem.splice(index,1)
            console.log(index)
        },
        increaseQty : (state,action)=>{
            const index=state.cartItem.findIndex((el)=>el._id === action.payload)
            let qty = state.cartItem[index].qty
            const qtyInc = ++qty
            state.cartItem[index].qty=++qty

            const price =state.cartItem[index].price
            const total =price *qtyInc

            state.cartItem[index].total=total
        },
        decreaseQty : (state,action)=>{
            const index=state.cartItem.findIndex((el)=>el._id === action.payload)
            let qty = state.cartItem[index].qty
            if(qty > 1){
                const qtyDec = --qty
                state.cartItem[index].qty = qtyDec

                const price =state.cartItem[index].price
                const total =price *qtyDec

                state.cartItem[index].total=total
            }
        }
    }
})

export const {setDataProduct,addCartItem,deleteCartItem,increaseQty,decreaseQty} = productSlice.actions

export default productSlice.reducer