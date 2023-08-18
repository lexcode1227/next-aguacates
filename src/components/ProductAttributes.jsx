import React from 'react'

const ProductAttributes = ({avo}) => {
  return (
    <section className='max-w-[700px]'>
        <h3 className='text-lg font-bold mb-3.5'>Acerca de este Avocado</h3>
        <p className='text-base text-justify mb-4'>{avo.attributes?.description}</p>
        <div className='border-[#22242626] border border-solid my-3.5'></div>
        <div className='flex flex-col'>
            <div className='border-[#22242626] border border-solid bg-[#f9fafb] text-base font-bold py-5 px-3'>Atributos</div>
            <div className='flex flex-col border-[#22242626] border border-solid sm:border-transparent sm:border-0 sm:flex-row '>
                <div className='w-2/5 text-base font-bold sm:border-[#22242626] sm:border sm:border-solid py-2 sm:py-5 px-2 sm:px-3' >Shape</div>
                <div className='w-3/5 sm:border-[#22242626] sm:border sm:border-solid py-2 sm:py-5 px-2 sm:px-3'>{avo.attributes?.shape}</div>
            </div>
            <div className=' flex flex-col border-[#22242626] border border-solid sm:border-transparent sm:border-0 sm:flex-row'>
                <div className='w-2/5 text-base font-bold sm:border-[#22242626] sm:border sm:border-solid py-2 sm:py-5 px-2 sm:px-3' >Hardiness</div>
                <div className='w-3/5 sm:border-[#22242626] sm:border sm:border-solid py-2 sm:py-5 px-2 sm:px-3'>{avo.attributes?.hardiness}</div>
            </div>
            <div className='flex flex-col border-[#22242626] border border-solid sm:border-transparent sm:border-0 sm:flex-row'>
                <div className='w-2/5 text-base font-bold sm:border-[#22242626] sm:border sm:border-solid py-2 sm:py-6 px-2 sm:px-3' >Taste</div>
                <div className='w-3/5 sm:border-[#22242626] sm:border sm:border-solid py-2 sm:py-5 px-2 sm:px-3'>{avo.attributes?.taste}</div>
            </div>
        </div> 
    </section>
  )
}

export default ProductAttributes