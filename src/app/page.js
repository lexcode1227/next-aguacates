'use client'
import ProductList from "@/components/ProductList";
import Avocado from "@/components/SVGIcons/Avocado";
import { Col, Spin } from 'antd'
import { useEffect, useState } from "react";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://platzi-avo.vercel.app/api/avo")
      .then((res) => res.json())
      .then(({ data }) => {
        setProductList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <main className="h-full mt-3.5">
      <div className="flex justify-center text-center mt-7 mb-7 ">
        <h1 className="text-4xl">Platzi</h1>
        <Avocado size="58px"/>
        <h2 className="text-4xl"> Avo</h2>
      </div>
      <h3 className="text-base text-blue-700 w-full text-center mb-7">¿Deberia comer un avo hoy?</h3>
      {loading ? 
        <Col className="text-center"> <Spin spinning size='large'/> </Col> 
      : 
        <ProductList products={productList} />}
      
    </main>
  );
};

export default Home;