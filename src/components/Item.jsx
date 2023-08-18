import React from 'react'
import ProductSummary from './ProductSummary'
import ProductAttributes from './ProductAttributes'

const Item = ({avo}) => {
  return (
    <main className='flex flex-col justify-center items-center mt-3.5 mx-4'>
        <ProductSummary avo={avo} />
        <ProductAttributes avo={avo} />
    </main>
  )
}

export default Item