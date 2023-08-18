'use client'
import React from 'react'

const CartPage = () => {
  const totalAmount  = 0;
  return (
    <main className='flex flex-col justify-center items-center mt-7 mx-4 '>
      <section className='w-full sm:max-w-[700px]'>
        <section className='bg-[#fffaf3] text-[#573a08] py-4 px-6 mb-4 border-solid box border shadow-[#c9ba9b]'>
          <h2 className='font-bold text-lg'>Your cart is empty</h2>
          <p>You will need to add some items to the cart before you can checkout.</p>
        </section>
        <section className='flex items-center justify-between mt-3.5 p-4 border border-solid rounded '>
          <span><strong>Subtotal: </strong>{`${totalAmount}`}</span>
          <button className='bg-[#1b1c1d] text-white text-sm rounded py-[11px] px-[21px]' onClick={()=> alert("Pago ejecutado")}>Checkout</button>
        </section>
      </section>
      
    </main>
  )
}

export default CartPage