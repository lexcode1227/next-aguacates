'use client'
import {React, useState, useEffect} from 'react'
import Item from '@/components/Item'
import { Col, Spin } from 'antd'

const ProductItem = ({ params }) => {
  const id = params.id
  const [loading, setLoading] = useState(true)
  const [avo, setAvo] = useState([]);

  useEffect(() => {
    fetch(`https://platzi-avo.vercel.app/api/avo/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAvo(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    loading ? 
    <Col className="text-center"> <Spin spinning size='large'/> </Col> 
    : 
    <Item avo={avo} />
  )
}

export default ProductItem