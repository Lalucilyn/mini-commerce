import React from 'react';
import Product from '../product/Product';
import styles from './Products.module.css'; 

const products = (props) => {
	let findProductsQuantity = (product) => {
  let purchasedProduct = props.cart.find(pr => pr.id === product.id);
  return purchasedProduct ? purchasedProduct.quantity : 0
 };

	return (
		<div className={styles['products-wrapper']}>
			<h2>Nuestros Productos</h2>
      <div className={styles.products}>
   	    {props.products.map(product => <Product 
    	   key={product.id} 
     	   product={product} 
    	   quantity={findProductsQuantity(product)}
     	   addProduct={() => props.addProduct(product)} 
    	   removeProduct={() => props.removeProduct(product)}/>
        )}
	 	  </div>
	  </div>
	)
}

export default products