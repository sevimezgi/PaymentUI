import React from "react";

import products from "../../assets/files/products.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../store";
import { ICartItem } from "../../store/cart.slice";
import "./Home.css"

const Home = () => {
  const cartItems = useAppSelector((state) => state.cart.items) as ICartItem[];

  return (
    <>
      <div className="flex flex-col bg-white w-[80%] m-auto mt-[5%] rounded-xl p-5 ">
        <div className="flex justify-between items-center w-full mb-5">
          <h1 className="font-medium text-2xl">Recommended for you</h1>
        </div>

        <div className="flex flex-wrap gap-5 item-start product-content">
          {/* products list */}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isInCart={cartItems.find((p) => p.id == product.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
