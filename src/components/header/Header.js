import React from 'react';
import logo from '../../assets/logo.png';
import Nav from '../nav/Nav';

import styles from './Header.module.css';
const header = (props) => {
	const categories = () => {
		const cat = []
		props.products.forEach(product => {!cat.find(prod => prod === product.category) && cat.push(product.category)})
		return cat
	}
	return (
		<header className={styles['app-header']}>
			<div onClick={()=>props.filter()}>
				<img src={logo} alt="Shop Logo" />	
				<h1>Cupcake Ipsum</h1>			
			</div>
			<Nav categories={categories()} filter={props.filter} empty={props.empty} checkout={props.checkout} openCheckout={props.openCheckout}/>
		</header>
	)
}

export default header