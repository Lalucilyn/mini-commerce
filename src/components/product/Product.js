import React, {useState} from 'react';
import styles from './Product.module.css';

function Product (props) {
 const [hover, setHover] = useState(false)
 const isTheProductAlreadyOnTheCart = props.quantity;
 let pic = require(`../../assets/pictures/${props.product.img}_${hover ? '2': '1'}.jpg`)
 const handleHover = () => {
  console.log(hover)
  setHover(!hover)
 }
 return (
  <div className={styles['product-wrapper']} onMouseEnter={() => handleHover()} onMouseLeave={() =>handleHover()}>
   {(props.product.discount !== 0) && <h6>- {props.product.discount}%</h6>}
   <figure>
    <img src={pic} alt={`foto-${props.product.name}`}/>
   </figure>
   <h3>{props.product.name}</h3>
   <p>
    <span>${props.product.price.toFixed(2)}</span>
   </p>
   {
    !isTheProductAlreadyOnTheCart ? 
    <button onClick={props.addProduct}>Agregar al carrito</button> :
    <div className={styles.spinner}>
     <button onClick={props.removeProduct}>-</button>
      <span>{props.quantity}</span>
     <button onClick={props.addProduct}>+</button>
    </div>
   }
  </div>
 )
}

export default Product