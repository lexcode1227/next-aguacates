import React from 'react';
import { useSelector } from 'react-redux';

const Subtotal = () => {
  const totalAmount = useSelector((state) => state.cart.avocadoCartCount);
  return (
    <section className='flex items-center justify-between mt-3.5 p-4 border border-solid rounded '>
        <div className='flex flex-col items-center'>
          <span><strong>Cantidad: </strong>{`${totalAmount}`}</span>
          <span><strong>Subtotal: </strong>{`${totalAmount}`}</span>
        </div>
        <button className='bg-[#1b1c1d] text-white text-sm rounded py-[11px] px-[21px]' onClick={()=> alert("Pago ejecutado")}>Checkout</button>
    </section>
  )
}

export default Subtotal