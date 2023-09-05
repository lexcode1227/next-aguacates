import { clearCart } from '@/app/Store/cartSlice';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EmptyCart from './EmptyCart';

const Total = () => {
  const totalAmount = useSelector((state) => state.cart.avocadoCartCount);
  const totalMoney = useSelector((state)=> state.cart.total);
  const cartIsEmpty = useSelector((state)=> state.cart.avocadoCart.length === 0);
  const dispatch = useDispatch();
  const handleClearCart = ()=> {
    dispatch(clearCart())
  }
  if(totalAmount == 0){
    dispatch(clearCart())
  }
  return (
    <section className='flex items-center justify-between mt-3.5 p-4 border border-solid rounded '>
        <div className='flex flex-col items-start'>
          <span><strong>Cantidad: </strong>{totalAmount}</span>
          <span><strong>Total: </strong>$ {(totalMoney).toFixed(2)} </span>
        </div>
        <div className='flex gap-5 justify-center'>
          <button disabled={cartIsEmpty} onClick={()=> handleClearCart() }>Limpiar</button>
          <button className='bg-[#1b1c1d] text-white text-sm rounded py-[11px] px-[21px]' disabled={cartIsEmpty} onClick={()=> alert("Pago ejecutado")}>Checkout</button>
        </div>
    </section>
  )
}

export default Total;