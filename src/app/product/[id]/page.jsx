'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import Item from '@/components/Item'
import { Col, Spin } from 'antd'

const ProductItem = ({ params }) => {
  const id = params.id;
  const avo = useSelector((state)=> state.cart.avocadoList.find(item => item.avocado.id === id));
  const loading = useSelector((state) => state.cart.loading);

  return (
    (loading || !avo ) ? 
    <Col className="text-center"> <Spin spinning size='large'/> </Col> 
    : 
    <Item avo={avo} />
  )
}

export default ProductItem