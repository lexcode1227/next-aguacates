import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='py-14 px-0 mt-10 border-t border-solid border-red-50 flex justify-center'>
        <div className='max-w-3xl p-5 flex justify-between items-center gap-2.5 flex-col container sm:flex-row sm:h-32 text-center'>
            <div className='flex flex-col items-center justify-center sm:w-2/5'>
                <h4 className='text-base text-gray-900 w-full'>Nosotros</h4>
                <h5 className='text-base text-blue-700 w-full'><Link href="/about" >Conoce más</Link></h5>
            </div>
            <div className='flex flex-col items-center justify-center sm:w-2/5'>
                <h4 className='text-base text-gray-900 w-full'>Servicios</h4>
                <h5 className='text-base text-blue-700 w-full'><Link href="/" >Todos los productos</Link></h5>
            </div>
            <div className='flex flex-col items-center justify-center sm:w-2/5'>
                <h4 className='text-base text-gray-900 w-full'>Hecho para </h4>
                <h5 className='text-base text-gray-900 '><Link className='text-base text-blue-700 no-underline' target='blank' href="https://platzi.com/">Platzi y su curso de Next.JS </Link> por <Link className='text-base text-blue-700 no-underline' target='blank' href="https://github.com/lexcode1227">@lexcode</Link></h5>
            </div>
        </div>
    </footer>
  )
}

export default Footer