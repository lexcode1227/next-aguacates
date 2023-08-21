import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';

const ProductList = () => {
    const products = useSelector((state) => state.cart.avocadoList);
    return (
        <div className='flex justify-center'>
            <div className='max-w-5xl flex justify-center flex-wrap text-center gap-5'>
                {products.map(({name, id, price, image}) => (
                    <Link href={`/product/${id}`} className='border-2 border-solid rounded shadow hover:scale-105' key={id}>
                        <img src={`https://platzi-avo.vercel.app${image}`} width={300} height={300} alt={name} />
                        <div>
                            <h3>{name}</h3>
                            <h4>{price}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

  )
}

export default ProductList