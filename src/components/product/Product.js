import React from 'react';
// reminder to reimport useState when you fix the hover
import styles from './Product.module.css';

function Product (props) {
 // const [hover, setHover] = useState(false)
 const isTheProductAlreadyOnTheCart = props.quantity;
 let pic = require(`../../assets/pictures/${props.product.img}_${1}.jpg`)

  // Disabled until I change the images resolution. It looks wonky when it takes time to load
 // const handleHover = () => {
 //  setHover(!hover)
 // }

 return (
  <div className={styles['product-wrapper']}>
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