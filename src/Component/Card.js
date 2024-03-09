import React, { useState } from 'react'
import './Card.css';

const Card = ({products,setProducts,quantity,setQuantity}) => {
  // total and settotal usestate declare hear
    const [total,setTotal] = useState(0);

  // increase button hear
  function Increase(id){
    products.map((product) => {
      if(product.id === id){
        product.quantity += 1;
        let temp = parseInt(total) + parseInt(product.price);
        setTotal(temp);
        setQuantity(quantity + 1);
      }
      return product;
    });
    setProducts(products);
  }

  // decrease button hear

    function Decrease(id){
      let totalProduct = [...products];
      totalProduct.map((product) =>{
        if(product.id === id  && product.quantity >= 1){
          product.quantity -= 1;
          let temp2 = parseInt(total) - parseInt(product.price);
          setTotal(temp2);
          setQuantity(quantity - 1);
        }
        return product;
      })
      setProducts(totalProduct);
    }

  // remove one particular product button hear

    function remove(id){
      let totalProduct = [...products];
      let arr = totalProduct.filter((product) =>{
        if(product.id === id){
          setTotal(total - product.quantity * product.price);
          setQuantity(quantity - product.quantity);
        }
        return product.id !== id;
      })
      setProducts(arr);
    }

  return (
    <div>
        <h1 className='bag'>YOUR BAG</h1>
          {products.length <= 0 && <h2 className='is_empty'>Is Currently Empty</h2>}
          {
            products.map((product) =>{
              return(
                <div key={product.id}>
                    {/* All Products */}
                    <div className='All_products'>
                        <img alt='img' src={product.img} height={"80px"} width={"80px"}/>

                        <div className='items'>
                            <h2>{product.title}</h2>
                            <h3 className='h3'>{product.price}</h3>
                            <button className='one_produce_remover_btn' onClick={()=> { remove(product.id) }}>Remove</button>
                        </div>

                        <div className='plus_quantity_minus'>
                          <button className='three_btn' onClick={() => { Increase(product.id); }}>+</button>
                          <button className='three_btn'>{product.quantity}</button>
                          <button className='three_btn' onClick={() => { Decrease(product.id);}}>-</button>
                        </div>
                    </div>
                </div>
              )
            })
          }
          {/* total section start */}
          <div className='total_plus_clear'>
              <div className='total_flex'>
                  <span className='totals'>Total :</span>
                  <span className='totals'>${total}</span>
              </div>
              <button onClick={() => { 
                setProducts([]);
                setTotal(0);
                setQuantity(0);
                
              }}>Clear Cart</button>
              <span></span>
          </div>
    </div>
  )
}

export default Card;