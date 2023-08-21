import { addAvo } from '@/app/Store/cartSlice'
import { React, useState } from 'react'
import { useDispatch } from 'react-redux'

const ProductSummary = ({avo}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    const handleAddToCart = (avocado, quantity) => {
        dispatch(addAvo({avocado, quantity}));
      };
      
  return (
    <section className='w-full sm:max-w-[700px] mb-6'>
        <div className='flex justify-between flex-col sm:flex-row items-center'>
            <img src={`https://platzi-avo.vercel.app${avo.image}`} alt={avo.name} width={300} height={300}/>
            <div className='w-full sm:w-[400px] pt-6'>
                <h1 className='text-xl font-bold leading-6'>{avo.name}</h1>
                <div className='mt-2.5'>
                    <p className='text-base mb-2'>{avo.price}</p>
                    <div className='w-[120px] ml-0.5 rounded text-xs px-2 py-2.5 bg-[#e8e8e8]'>SKU: {avo.sku}</div>
                </div>
                <div className='max-w-[340px] mt-2 h-11 flex items-center'>
                    <input className='py-[9px] px-4 w-3/5 border border-solid border-[#22242626] border-r-0 rounded rounded-r-none' placeholder='quantity' min="1" type='number' value={quantity} onChange={(e)=> setQuantity(parseInt(e.target.value))} />
                    <button className='py-2.5 w-2/5 rounded rounded-l-none bg-[#21ba45] text-white' onClick={()=>handleAddToCart(avo, quantity)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductSummary