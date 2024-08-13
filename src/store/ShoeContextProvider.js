import React, { useReducer } from "react";
import ShoeContext from "./shoe-context";

const shoeReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "SMALL") {
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.cartItems[existingCartItemIndex];
    const existingItem = state.items[existingItemIndex];

    const updatedTotalAmount = state.totalAmount + Number(existingItem.price);
    let updatedItems;
    let updatedCartItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingItem,
        qS: existingItem.qS - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;

      const updatedCartItem = {
        ...existingCartItem,
        qS: existingCartItem.qS + 1,
      };

      updatedCartItems = [...state.cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      

      return {
        ...state,
        items: updatedItems,
        cartItems: updatedCartItems,
        totalAmount: updatedTotalAmount,
      };
    } else {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingItemIndex];
      let updatedItems;
      const updatedTotalAmount = state.totalAmount + Number(existingItem.price);
      const updatedItem = {
        ...existingItem,
        qS: existingItem.qS - 1,
      };
      const newCartItem = {
        ...existingItem,
        qL : 0,
        qM : 0,
        qS: 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
      return {
        ...state,
        items: updatedItems,
        cartItems: state.cartItems.concat(newCartItem),
        totalAmount: updatedTotalAmount,
      };
    }
  }

  if (action.type === "MEDIUM") {
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.cartItems[existingCartItemIndex];
    const existingItem = state.items[existingItemIndex];

    const updatedTotalAmount = state.totalAmount + Number(existingItem.price);
    let updatedItems;
    let updatedCartItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingItem,
        qM: existingItem.qM - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;

      const updatedCartItem = {
        ...existingCartItem,
        qM: existingCartItem.qM + 1,
      };

      updatedCartItems = [...state.cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      

      return {
        ...state,
        items: updatedItems,
        cartItems: updatedCartItems,
        totalAmount: updatedTotalAmount,
      };
    } else {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingItemIndex];
      let updatedItems;
      const updatedTotalAmount = state.totalAmount + Number(existingItem.price);
      const updatedItem = {
        ...existingItem,
        qM: existingItem.qM - 1,
      };
      const newCartItem = {
        ...existingItem,
        qL : 0,
        qM: 1,
        qS : 0
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
      return {
        ...state,
        items: updatedItems,
        cartItems: state.cartItems.concat(newCartItem),
        totalAmount: updatedTotalAmount,
      };
    }
  }

  if (action.type === "LARGE") {
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.cartItems[existingCartItemIndex];
    const existingItem = state.items[existingItemIndex];

    const updatedTotalAmount = state.totalAmount + Number(existingItem.price);
    let updatedItems;
    let updatedCartItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingItem,
        qL: existingItem.qL - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;

      const updatedCartItem = {
        ...existingCartItem,
        qL: existingCartItem.qL + 1,
      };

      updatedCartItems = [...state.cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      console.log(updatedItems, updatedCartItems)

      return {
        ...state,
        items: updatedItems,
        cartItems: updatedCartItems,
        totalAmount: updatedTotalAmount,
      };
    } else {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingItemIndex];
      let updatedItems;
      const updatedTotalAmount = state.totalAmount + Number(existingItem.price);
      const updatedItem = {
        ...existingItem,
        qL: existingItem.qL - 1,
      };
      const newCartItem = {
        ...existingItem,
        qL: 1,
        qM : 0,
        qS : 0
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
      return {
        ...state,
        items: updatedItems,
        cartItems: state.cartItems.concat(newCartItem),
        totalAmount: updatedTotalAmount,
      };
    }
  }


  return state;
};

const ShoeContextProvider = (props) => {
  const [shoeState, dispatchShoeState] = useReducer(shoeReducer, {
    items: [],
    cartItems: [],
    totalAmount: 0, // Ensure totalAmount is initialized as a number
  });

  const addItemHandler = (item) => {
    dispatchShoeState({ type: "ADD", item: item });
  };

  const buyLargeHandler = (id) => {
    dispatchShoeState({ type: "LARGE", id: id });
  };

  const buyMediumHandler = (id) => {
    dispatchShoeState({ type: "MEDIUM", id: id });
  };

  const buySmallHandler = (id) => {
    dispatchShoeState({ type: "SMALL", id: id });
  };

  const shoeContext = {
    items: shoeState.items,
    cartItems: shoeState.cartItems,
    totalAmount: shoeState.totalAmount, 
    addItem: addItemHandler,
    buyLarge: buyLargeHandler,
    buyMedium: buyMediumHandler,
    buySmall: buySmallHandler,
  };

  return (
    <ShoeContext.Provider value={shoeContext}>
      {props.children}
    </ShoeContext.Provider>
  );
};

export default ShoeContextProvider;
