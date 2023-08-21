import { removeAvo } from '@/app/Store/cartSlice';
import {CloseOutlined} from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CartItems = () => {
  const avosCartList = useSelector((state) => state.cart.avocadoCart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (id, price) => {
      dispatch(removeAvo({id, price}));
    };

  return (
    <section>
      {avosCartList.map(({avocado, quantity}) => {
        const {name, id, price, image} = avocado;
        return (
          <div className='flex flex-col sm:flex-row items-center justify-start gap-4 max-w-[700px]' key={id}>
            <img src={`https://platzi-avo.vercel.app${image}`} alt={name} width={150} height={150} />
            <div>
              <div className='flex justify-between w-full'>
                <h2 className='text-[#4183c4] text-[20px] font-bold'><Link href={`/product/${id}`} >{name}</Link></h2>
                <button className='p-1' onClick={()=> handleRemoveFromCart(id, price) }>
                  <CloseOutlined style={{color: "#4183c4"}}/>
                </button>
              </div>
              <h4 className='text-base text-[#00000099] py-2'>{`${quantity} x ${price}`}</h4>
              <h5 className='text-base mt-2.5'>Some more information goes here...</h5>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default CartItems