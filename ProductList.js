import React from 'react'
import Product from './Product'
import './ProductList.css'

//function ProductList() {
//   return (
//     <div>ProductList</div>
//   )
// }

export default function ProductList({products, onUpdate}){
    return(
        <div className="container col-md-8 bg-light border border-info rounded">
            <div id='Category'>
                <button className='btn btn-primary'
                onClick={()=> onUpdate('http://localhost:3000/products')}>ALL</button>
                <button className='btn btn-primary'
                  onClick={()=> onUpdate('http://localhost:3000/products?categeory=accesories')}>ACCESORIES</button>
                <button className='btn btn-primary'
                  onClick={()=> onUpdate('http://localhost:3000/products?categeory=mobile')}>MOBILE</button>
                <button className='btn btn-primary'
                  onClick={()=> onUpdate('http://localhost:3000/products?categeory=electronics')}>ELECTRONIC</button>
            </div>
            {
            products && products.map(prod => <Product prod={prod} key={prod.id}/>)
            }
        </div>
    )
}