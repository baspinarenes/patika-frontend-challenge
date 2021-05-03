import React, { useState } from 'react';
import './App.css';
import Navbar from './components/CustomNavbar';
import { products } from './constants';
import ProductsGrid from './components/ProductsGrid';

function App() {
  const [cart, setCart] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
  ]);
  const [itemCount, setItemCount] = useState(0);

  const getItemCount = (cart) => {
    // Sepetteki toplam ürün sayısını bul
    let itemCount = cart.reduce((total, product) => total + product.value, 0);

    return itemCount;
  };

  const handleIncrement = (product) => {
    // cart array'inin kopyasını oluştur
    const cart = [...cart];
    // parametre olarak gelen product'ın cart array'i içerisindeki index'ini bul
    const index = cart.indexOf(product);
    // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
    cart[index] = { ...cart[index] };
    cart[index].value++;
    // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
    setItemCount(getItemCount(cart));
    // state'i güncelle
    setCart(cart);
  };

  const handleDecrement = (product) => {
    const cart = [...cart];
    const index = cart.indexOf(product);
    cart[index] = { ...cart[index] };
    cart[index].value--;
    setItemCount(getItemCount(cart));
    setCart(cart);
  };

  return (
    <div className="App">
      <Navbar totalItems={itemCount} />
      <ProductsGrid
        products={products}
        cart={cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

export default App;
