import React, { useEffect, useState } from "react";

const AddtoCart = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  console.log(show);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((ele) => ele.json())
      .then((result) => setData(result));
  }, []);

  const handleOnAddToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setShow((ele) => ({
      ...ele,
      [item.id]: true,
    }));
  };

  const handleOnRemoveItem = (item) => {
    const removeToCart = cart.filter((removeItem) => removeItem.id !== item.id);
    setCart(removeToCart);
    localStorage.setItem("cart", JSON.stringify(removeToCart));
    setShow((ele) => ({
      ...ele,
      [item.id]: false,
    }));
  };

  const handleClearAll = () => {
    setCart("");
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <div>
      <button onClick={handleClearAll}>clear All </button>
      {data.map((ele, i) => {
        return (
          <div key={ele.id}>
            <h4>
              {ele.id}. {ele.title}
              <button onClick={() => handleOnAddToCart(ele)}>Addtocart</button>
              {show[ele.id] && (
                <button onClick={() => handleOnRemoveItem(ele)}>
                  removeItem
                </button>
              )}
            </h4>
          </div>
        );
      })}
      
    </div>
  );
};

export default AddtoCart;
