import React from "react";

const ShoeContext = React.createContext({
    totalAmount:0,
    items:[],
    cartItems : [],
    addItem: (item)=>{},
    buyLarge : (id)=>{},
    buyMedium : (id)=>{},
    buySmall : (id)=>{},
})

export default ShoeContext;