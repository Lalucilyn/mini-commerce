import React from 'react';
import styles from './CartProduct.module.css'; 
const cart = (props) => {
	let pic = require(`../../assets/pictures/${props.product.img}_1.jpg`)
	let labels = [
	{
		label: "Producto",
		item: props.product.name
	},
	{
		label: "Precio",
		item: `$${props.product.price}`,
		hide: true
	},
	{
		label: "Cantidad",
		item: `${props.product.quantity}`,
		hide: true
	},
	{
		label: "Total",
		item: `$${(props.product.price - props.product.price * (props.product.discount/100)) * props.product.quantity}`
	}]
	return (
	<div className={styles['cart-product']}>
		<img src={pic} alt={props.product.name}/>
		{labels.map(label => (
			<div key={label.label} className={label.hide && styles['hide']}>
			<p>{label.label}</p>
			<p>{label.item}</p>
			</div>
			)
		)
		}
	</div>
	)
}

export default cart