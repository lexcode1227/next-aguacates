'use client'
import Link from 'next/link'
import React from 'react'
import Avocado from './SVGIcons/Avocado'
import Basket from './SVGIcons/Basket'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cartItemsCount = useSelector((state) => state.cart.avocadoCart.length);
  return (
    <header className='flex justify-center mb-3.5 h-16 border-b border-solid shadow-[#22242626] shadow-sm'>
      <nav className='flex justify-between w-full sm:max-w-2xl'> 
        <menu className='w-full flex justify-between p-2.5 gap-2.5'>
            <Link href="/" >
              <menu className='flex gap-2 justify-center items-center' title="Inicio | Todos los productos">
                <Avocado/>
                Avo Store
              </menu>              
            </Link>
            <Link href="/cart" >
              <menu className='flex gap-2 justify-center items-center' title="Carrito de compras">
                <Basket/>
                Canasta:
                {cartItemsCount}
              </menu> 
            </Link>
        </menu>
      </nav>
    </header>
  )
}

export default Navbar