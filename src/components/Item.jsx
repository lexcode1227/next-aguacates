import React from 'react'
import { useSelector } from 'react-redux'
import ProductSummary from './ProductSummary'
import ProductAttributes from './ProductAttributes'

const Item = ({id}) => {
  const avo = useSelector((state)=> state.cart.avocadoList.find(item => item.id === id));
  return (
    <main className='flex flex-col justify-center items-center mt-3.5 mx-4'>
        <ProductSummary avo={avo} />
        <ProductAttributes avo={avo} />
    </main>
  )
}

export default Item