import InputForm from "./InputForm";
import ProductList from "./ProductList";
import ShoeContextProvider from "./store/ShoeContextProvider";
import Header from "./Header";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  const [cartState, setCartState] = useState(true);

  const showCartHandler = ()=>{
    setCartState(false);
  }

  const hideCartHandler = () =>{
    setCartState(true);
  }

  return (
    <ShoeContextProvider>
      <Header showCart={showCartHandler}/>
      <main>
        {!cartState && <Cart hideCart={hideCartHandler}/>}
        <InputForm />
        <ProductList />
      </main>
    </ShoeContextProvider>
  );
}

export default App;
