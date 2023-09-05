'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import Item from '@/components/Item'
import { Col, Spin } from 'antd'

const ProductItem = ({ params }) => {
  const id = params.id;
  const loading = useSelector((state) => state.cart.loading);

  return (
    loading ? 
    <Col className="text-center"> <Spin spinning size='large'/> </Col> 
    : 
    <Item id={id} />
  )
}

export default ProductItem