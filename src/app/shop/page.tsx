"use client";

import { useState } from "react";
import Clothes from "@/components/clothes";
import Reviews_Shop from "@/components/reviewsShop";
import Image from "next/image";


export default function Shop() {
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "One Life Graphic T-Shirt",
    description:
      "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    price: 260,
    originalPrice: 300,
    discount: 40,
    colors: ["#6A8454", "#324D67", "#000000"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    image: "/product12.png",
    images: ["/product9.png", "/product10.png", "/product11.png"],
  };


  return (
    <div className="max-w-7xl mx-auto font-sans p-5">
      <nav className="mb-5 text-gray-600 text-sm">
        <span>Home</span> &gt; <span>Shop</span> &gt; <span>Men</span> &gt;{" "}
        <span>T-Shirts</span>
      </nav>

      <div className="flex gap-5 mb-10">
        
        <div className="flex flex-col items-center">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full sm:w-[200%] rounded-lg"
          />
          <div className="flex gap-2 mt-2">
            {product.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className="w-20 h-20 mt-2 mr-2 border border-gray-300 rounded-md cursor-pointer"
              />
            ))}
          </div>
        </div>

        
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold">{product.name}</h1>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-yellow-400 text-xl">⭐⭐⭐⭐</span>
            <span className="text-gray-600 text-sm">4.5/5</span>
          </div>

          <div className="flex items-center gap-2 mt-5">
            <span className="text-2xl text-green-700 font-bold">${product.price}</span>
            <span className="line-through text-gray-400">${product.originalPrice}</span>
            <span className="text-red-600 font-bold">-{product.discount}%</span>
          </div>

          <p className="text-gray-600 mt-5 mb-10 pb-5 border-b border-gray-300">
            {product.description}
          </p>

          <div className="mt-5">
            <h3 className="text-lg font-bold mb-3">Select Colors</h3>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>

          <hr className="my-5 border-t border-gray-300" />

          <div className="mt-5 mb-5">
            <h3 className="text-lg font-bold mb-3">Choose Size</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-5 py-2 border rounded-full cursor-pointer ${
                    size === selectedSize
                      ? "bg-black text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <hr className="my-5 border-t border-gray-300" />

          <div className="flex items-center gap-3 mt-5">
            <button
              className="w-8 h-8 border rounded-md bg-gray-100 cursor-pointer"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="px-5">{quantity}</span>
            <button
              className="w-8 h-8 border rounded-md bg-gray-100 cursor-pointer"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
            <button className="w-full max-w-md bg-black text-white py-2 px-5 rounded-full text-center cursor-pointer hover:bg-gray-800">
              Add to Cart
            </button>


          </div>
        </div>
      </div>
      <Reviews_Shop/>
      <div className="flex justify-center mt-10">
        <button className="w-[218px] h-[52px] bg-gray-100 text-black rounded-full font-bold hover:bg-gray-200">
          Load More Reviews
        </button>
      </div>
      <Clothes/>
    </div>
  );
}


