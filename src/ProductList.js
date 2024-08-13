import React, { useContext } from "react";
import ShoeContext from "./store/shoe-context";

const ProductList = () => {
    const ctx = useContext(ShoeContext);

    const onBuyLarge = id =>{
      ctx.buyLarge(id)
      
    }
    const onBuyMedium = id =>{
      ctx.buyMedium(id)
      
    }
    const onBuySmall = id =>{
      ctx.buySmall(id)
  
      
    }
  return (
    <table>
      <thead>
        <tr>
          <th>Shoe Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {ctx.items.map((shoe) => (
          <tr key={shoe.id}>
            <td>{shoe.name}</td>
            <td>{shoe.description}</td>
            <td>${shoe.price}</td>

            <td>
              <tr>
                <td>{`(L-${shoe.qL})`}</td>
                <td>{`(M-${shoe.qM})`}</td>
                <td>{`(S-${shoe.qS})`}</td>
              </tr>
            </td>

            <td>
              <button onClick={onBuyLarge.bind(null, shoe.id)}>Buy Large</button>
              <button onClick={onBuyMedium.bind(null, shoe.id)}>Buy Medium</button>
              <button onClick={onBuySmall.bind(null, shoe.id)}>Buy Small</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
