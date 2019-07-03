import React, {useState} from 'react';
import Header from './components/header/Header';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';

function App() {
 const getCartFromStorage = localStorage.getItem('cart')
 const products = require('./assets/products/products').products
 const [totalProducts, setTotalProducts] = useState(products)
 const [shoppingCart, setShoppingCart] = useState(getCartFromStorage ? JSON.parse(getCartFromStorage) : []);
 const [checkout, setCheckout] = useState(false)

// Add product to cart
 const handleProductAdd = (product) => {
  let cartCopy = [...shoppingCart];
  let purchased = cartCopy.find(pr => pr.id === product.id);
  purchased ? purchased.quantity++ : cartCopy.push({...product, quantity: 1});
  saveCartOnLocalStorage(cartCopy)
  setShoppingCart(cartCopy)
 };

// Remove product from cart
 const handleProductRemove = (product) => {
  let cartCopy = [...shoppingCart];
  let currentProduct = cartCopy.findIndex(pr => pr.id === product.id);
  cartCopy[currentProduct].quantity === 1 ? cartCopy.splice(currentProduct, 1) : cartCopy[currentProduct].quantity--;
  saveCartOnLocalStorage(cartCopy)
  setShoppingCart(cartCopy);
 }

// Save cart on localstorage
 const saveCartOnLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
 }

// Filter products when a navbar item is clicked
 const filter = (cat) => {
    const filtered = !cat ? products : products.filter(prod => prod.category === cat)
    setCheckout(false)
    setTotalProducts(filtered)
 }

// Open the shopping cart (hide the products)
 const openCheckout = () => {
  setCheckout(!checkout)
 }

// Empty the cart (pending: a thank you message)
 const confirmPurchase = () => {
  setShoppingCart([])
  saveCartOnLocalStorage([])
  setCheckout(false)
  setTotalProducts(products)
 }

 return (
  <div className="App">
   <Header products={products} empty={!shoppingCart.length} filter={filter} openCheckout={openCheckout} checkout={checkout}/>
   {!checkout ? 
    <Products 
        products={totalProducts} 
        cart={shoppingCart} 
        addProduct={handleProductAdd} 
        removeProduct={handleProductRemove}
    />:
    <Cart cart={shoppingCart} confirm={confirmPurchase}/>
  }
  </div>
 );
}

export default App;
