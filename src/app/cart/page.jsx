'use client'
import EmptyCart from '@/components/EmptyCart';
import Subtotal from '@/components/Subtotal';
import { useSelector } from 'react-redux'

const CartPage = () => {
  const totalAmount = useSelector((state) => state.cart.avocadoCartCount);
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