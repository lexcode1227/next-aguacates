'use client'
import CartItems from '@/components/CartItems';
import EmptyCart from '@/components/EmptyCart';
import Total from '@/components/Total';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const Avos = useSelector((state) => state.cart.avocadoCart.length);
  return (
    <main className='flex flex-col justify-center items-center mt-7 mx-4 '>
      <section className='w-full sm:max-w-[700px]'>
        {(Avos === 0) ? <EmptyCart/> : <CartItems/> }
        <Total/>
      </section> 
    </main>
  )
}

export default CartPage