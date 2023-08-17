import React from "react";

const LocalStorge = () => {
  return (
    <div>
      <button
        onClick={() => {
          localStorage.setItem("arr", JSON.stringify([1, 2, 34, 4]));
          localStorage.setItem(
            "obj",
            JSON.stringify({ name: "name1", address: "add1" })
          );
        }}
      >
        SAVE
      </button>

      <button
        onClick={() => {
        //   localStorage.setItem("arr")[0];
        }}
      >
        GET VALUE
      </button>
    </div>
  );
};

export default LocalStorge;
