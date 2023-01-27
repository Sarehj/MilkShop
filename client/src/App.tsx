import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { IMilk } from './Interface/IMilk';
import { Home } from './Components/Home';
import { ProductDetail } from './Components/ProductDetail';
import { Header } from './Components/Header';


function App() {

  const [AllProducts, setAllProducts] = useState<IMilk[]>([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://localhost:7000/Milk')
      const data = await response.json()
      setAllProducts(data)
    }
    getData()
  }, [])

  
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home AllProducts={AllProducts} />} />
      <Route path='/Milk/:id' element={<ProductDetail />} />
    </Routes>
    </>
  );
}

export default App;
