import React from 'react';
import styles from './Button.module.css'; 
const button = (props) => {
	return (
		<button className={styles.button} onClick={props.click}>Cargar más productos</button>
 )
}

export default button