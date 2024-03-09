import { useState } from 'react';
import './App.css';
import Card from './Component/Card';
import Navbar from './Component/Navbar';
import img1 from './Component/img/phone-1.png'
import img2 from './Component/img/phone-2.png'
import img3 from './Component/img/phone-3.png'
import img4 from './Component/img/phone-4.png'

function App() {

   const [ products, setProducts] = useState([
    {
      id : 1,
      img : img1,
      title : "Samsung S8",
      price : "399.99",
      quantity : 0
    },
    {
      id : 2,
      img : img2,
      title : "Google Pixel",
      price : "499.99",
      quantity : 0
    },
    {
      id : 3,
      img : img3,
      title : "Redmi Note 2",
      price : "699.99",
      quantity : 0
    },
    {
      id : 4,
      img : img4,
      title : "Samsung S7",
      price : "599.99",
      quantity : 0
    }
  ]);

  const [quantity , setQuantity] = useState(0);

  return (
    <div>
      <Navbar quantity = {quantity}/>
      <Card 
      products = {products}
      setProducts = {setProducts}
      quantity = {quantity}
      setQuantity = {setQuantity} />
    </div>
  );
}

export default App;
