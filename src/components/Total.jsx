import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  const totalAmount = useSelector((state) => state.cart.avocadoCartCount);
  const totalMoney = useSelector((state)=> state.cart.total);
  return (
    <section className='flex items-center justify-between mt-3.5 p-4 border border-solid rounded '>
        <div className='flex flex-col items-center'>
          <span><strong>Cantidad: </strong>{`${totalAmount}`}</span>
          <span><strong>Total: </strong>{`$${totalMoney}`}</span>
        </div>
        <button className='bg-[#1b1c1d] text-white text-sm rounded py-[11px] px-[21px]' onClick={()=> alert("Pago ejecutado")}>Checkout</button>
    </section>
  )
}

export default Total;