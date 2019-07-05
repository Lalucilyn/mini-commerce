import React from 'react';
import styles from './Cart.module.css'; 
import CartProduct from '../cartProduct/CartProduct'
const cart = (props) => {
	const total = props.cart.map(product => product.quantity * (product.price - (product.price * (product.discount/100)))).reduce((a, b) => a + (b || 0), 0);
	return (	
	<div className={styles['cart']}>
		<h2>Mi Carrito</h2>
		{total ? 
		<div>
		{props.cart.map(product => <CartProduct key="product.id" product={product}/>)}
			<div className={styles['total']}>
				<p><strong>Total:</strong> ${total}</p>
				<button onClick={() => props.confirm()}>Confirmar</button>
			</div>
		</div>:
		<h6>{props.showThankyou ? '¡Gracias por tu compra' : 'No hay productos en tu carrito de compras'}</h6>}
	</div>)
}

export default cart