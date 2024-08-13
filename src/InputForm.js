import React, { useContext, useRef } from "react";
import ShoeContext from "./store/shoe-context";
const generateUniqueId = (name, price)=>{
    const normalizedString = `${name}-${price}`.toLowerCase().replace(/\s+/g, '-');
  const hash = normalizedString.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
  }, 0);
  return hash;
}

const InputForm = () => {
   const ctx = useContext(ShoeContext)
  const nameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const qLRef = useRef();
  const qMRef = useRef();
  const qSRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const desc = descRef.current.value;
    const price = priceRef.current.value;
    const qL = qLRef.current.value;
    const qM = qMRef.current.value;
    const qS = qSRef.current.value;

   const uniqueId = generateUniqueId(name, price);
    const data = {
        id : uniqueId,
        name : name,
        price : price,
        description : desc,
        qL : qL,
        qM : qM,
        qS : qS
    }
    ctx.addItem(data)
    nameRef.current.value = '';
    descRef.current.value = '';
    priceRef.current.value = '';
    qLRef.current.value = '';
    qMRef.current.value = '';
    qSRef.current.value = '';

  };
  return (
    <form onSubmit={submitHandler}>
      <label>Shoe name</label>
      <input type="text" ref={nameRef} />
      <label>description</label>
      <input type="text" ref={descRef} />
      <label>price</label>
      <input type="number" ref={priceRef} />
      <label>Quantity Large</label>
      <input type="number" ref={qLRef} />
      <label>Quantity Medium</label>
      <input type="number" ref={qMRef} />
      <label>Quantity Small</label>
      <input type="number" ref={qSRef} />
      <button type="submit">add product</button>
    </form>
  );
};

export default InputForm;
