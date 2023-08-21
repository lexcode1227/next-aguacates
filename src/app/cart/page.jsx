'use client'
import CartItems from '@/components/CartItems';
import EmptyCart from '@/components/EmptyCart';
import Subtotal from '@/components/Subtotal';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const Avos = useSelector((state) => state.cart.avocadoCart.length);
  console.log(Avos);
  return (
    <main className='flex flex-col justify-center items-center mt-7 mx-4 '>
      <section className='w-full sm:max-w-[700px]'>
        {(Avos === 0) ? <EmptyCart/> : <CartItems/> }
        <Subtotal/>
      </section> 
    </main>
  )
}

export default CartPage