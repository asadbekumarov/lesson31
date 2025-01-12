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
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((product) => (
              <li
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center transition-transform duration-300 hover:shadow-lg hover:scale-1"
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-32 w-auto mb-4 rounded-md"
                />
                <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 cursor-pointer hover:text-blue-600">
                  {product.title}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
