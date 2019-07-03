import React from 'react';
import styles from './Nav.module.css'; 
import cart from '../../assets/shopping-cart.png'
import close from '../../assets/close.png'

const nav = (props) => {
	return (
		<nav>
			<ul className={styles.ul}>
				{props.categories.map(cat => {
					return <li key={cat} onClick={() => props.filter(cat)}>{cat}</li>
				})}
				<li onClick={() => props.openCheckout()}>
				<div>
					<img src={!props.checkout ? cart : close} alt={!props.checkout ? 'Ver carrito' : 'Cerrar carrito'}/>
					{(!props.empty && !props.checkout) && <span></span>}
				</div>
			</li>
	 </ul>
	</nav>
	)
}

export default nav