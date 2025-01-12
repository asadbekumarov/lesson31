import React from "react";
import Products from "../products/Products";

const Home = () => {
  return (
    <div className="max-w-[1300px] m-auto px-5">
      <div className="mt-8">
        <h1 className="text-center font-extrabold  text-6xl pb-20">
          Home page
        </h1>
        <p className="text-2xl font-bold mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam alias
          pariatur eum culpa necessitatibus. Obcaecati perferendis minus, enim
          vitae illum cumque rerum aliquid quis, assumenda ab beatae nobis
          quisquam? Doloribus.
        </p>
      </div>
      <Products />
    </div>
  );
};

export default Home;
