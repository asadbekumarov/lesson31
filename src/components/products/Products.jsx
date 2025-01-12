import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="max-w-[1300px] m-auto px-5">
        <div className="p-5">
          <ul className="flex flex-col gap-4">
            {data.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex items-center transition-transform duration-300 hover:shadow-lg hover:scale-1"
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-32 w-auto mb-4 rounded-md"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 cursor-pointer hover:text-blue-600">
                    {product.title}
                  </h3>
                  <h3 className="text-sm font-semibold mb-2 transition-colors duration-300 cursor-pointer hover:text-blue-600">
                    {product.description}
                  </h3>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
