'use client'
import EmptyCart from '@/components/EmptyCart';
import Subtotal from '@/components/Subtotal';
import React from 'react'

const CartPage = () => {
  const totalAmount  = 0;
  return (
    <main className='flex flex-col justify-center items-center mt-7 mx-4 '>
      <section className='w-full sm:max-w-[700px]'>
        <EmptyCart/>
        <Subtotal totalAmount={totalAmount} />
      </section> 
    </main>
  )
}

export default CartPage