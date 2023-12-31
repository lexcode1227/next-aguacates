'use client'
import ProductList from "@/components/ProductList";
import Avocado from "@/components/SVGIcons/Avocado";
import { Col, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAvocados } from "./Store/cartSlice"; 
import { useEffect } from "react";

const Home = () => {
  const loading = useSelector((state) => state.cart.loading);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAvocados()) 
  },[])

  return (
    <main className="h-full mt-3.5">
      <div className="flex justify-center text-center mt-7 mb-7 ">
        <h1 className="text-4xl">Avo</h1>
        <Avocado size="58px"/>
        <h2 className="text-4xl"> Store</h2>
      </div>
      <h3 className="text-base text-blue-700 w-full text-center mb-7">¿Deberia comer un avo hoy?</h3>
      {loading ? 
        <Col className="text-center"> <Spin spinning size='large'/> </Col> 
      : 
        <ProductList/>}
    </main>
  );
};

export default Home;