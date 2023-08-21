import React from 'react'

const EmptyCart = () => {
  return (
    <section className='bg-[#fffaf3] text-[#573a08] py-4 px-6 mb-4 border-solid box border shadow-[#c9ba9b]'>
        <h2 className='font-bold text-lg'>Your cart is empty</h2>
        <p>You will need to add some items to the cart before you can checkout.</p>
    </section>
  )
}

export default EmptyCart