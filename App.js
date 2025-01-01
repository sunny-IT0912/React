import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ProductList from './ProductList';

function App() {
 const [products , setproducts] = useState(null);
 const [url , setUrl] = useState('http://localhost:3000/products');
 
//  fetch('http://localhost:3000/products')
//  .then(resp => resp.json())
//  .then(data => setproducts(data));
useEffect(()=>{
  fetch(url)
 .then(resp => resp.json())
  .then(data => setproducts(data));
},[url]);

const updateUrl = (newUrl)=>{
  setUrl(newUrl);
}

console.log(products);
return(
  <>
  <h2>My Shoop</h2>
  <ProductList products = {products} onUpdate={updateUrl}/>

  </>
);

}

export default App;
