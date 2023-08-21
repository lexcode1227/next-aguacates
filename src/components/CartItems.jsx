import React from 'react';
import { useSelector } from 'react-redux';

const CartItems = () => {
  const avosCartList = useSelector((state) => state.cart.avocadoCart);
  return (
    <section className='h-[400px]'>
      {avosCartList.map(({avocado, quantity})=>{
        const {name, id, price, image} = avocado;
        <div className='flex flex-col sm:flex-row' key={id}>
          <img src={`https://platzi-avo.vercel.app${image}`} alt={name} />
          <div>
            <h2>{name}</h2>
            <h4>{`${quantity} x ${price}`}</h4>
            <h5>Some more information goes here...</h5>
          </div>
        </div>
      })}
    </section>
  )
}

export default CartItems