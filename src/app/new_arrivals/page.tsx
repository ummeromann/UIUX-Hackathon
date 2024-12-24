import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: "$145",
    image: "/product14.png",
    rating: 3.5,
    discount: null,
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: "$180",
    image: "/product15.png",
    rating: 4.5,
    discount: null,
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: "$120",
    image: "/product16.png",
    rating: 5.0,
    discount: "-30%",
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    rating: 3.5,
    price: "$240",
    image: "/product2.png",
    discount: "-20%",
  },
  {
    id: 5,
    name: "Checkered Shirt",
    price: "$180",
    image: "/product3.png",
    rating: 4.5,
    discount: null,
  },
  {
    id: 6,
    name: "Sleeve Striped T-shirt",
    price: "$130",
    image: "/product4.png",
    rating: 4.0,
    discount: "-30%",
  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    price: "$212",
    image: "/product5.png",
    rating: 4.0,
    discount: "-20%",
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    price: "$145",
    image: "/product6.png",
    rating: 4.0,
    discount: null,
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    price: "$80",
    image: "/product7.png",
    rating: 4.5,
    discount: null,
  },
];

const CategoryPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-sm text-gray-600 mb-4">Home &gt; Casual</div>

        <div className="grid grid-cols-4 h-full gap-8">
          
          <aside className="bg-white rounded-lg shadow p-6 col-span-1">
            <h2 className="text-lg font-bold mb-6">Filters</h2>
            <div className="flex flex-col gap-2">
                {["Casual",<br/>, "Formal",<br/>, "Party",<br/>, "Gym",<br/>,<br/>]}
              </div>
           

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Price</h3>
              <input type="range" min="50" max="200" className="w-full" />
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Colors</h3>
              <div className="flex space-x-2">
                {["red", "blue", "green", "yellow", "orange", "purple","black"].map(
                  (color, index) => (
                    <div
                      key={index}
                      className={`w-6 h-6 rounded-full bg-${color}-500`}
                    ></div>
                  )
                )}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {["XX-Small", "X-Small","Small", "Medium", "Large", "X-Large","XX-Large","3X-Large","4X-Large"].map((size) => (
                  <button
                    key={size}
                    className="border w-[100px] h-[50px]  rounded-full text-sm"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Dress Style</h3>
              <div className="flex flex-col gap-2">
                {["Casual", "Formal", "Party", "Gym"].map((style) => (
                  <label key={style} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {style}
                  </label>
                ))}
              </div>
            </div>

            <button className="w-[240px] h-[52px] bg-black text-white rounded-full font-bold hover:bg-black">
              Apply Filter
            </button>
          </aside>

          
          <main className="col-span-3">
  <h2 className="text-4xl font-bold mb-6">Casual</h2>
  <div className="grid grid-cols-3 gap-6">
    {products.map((product) => (
      <div
        key={product.id}  // This key is for the outer div element
        className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
      >
        <Image
          src={product.image}
          alt={product.name}
          className="object-cover rounded-md mb-4"
          width={300}
          height={48}
        />
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-yellow-500 text-2xl mt-1">
          {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
            <span key={`filled-star-${index}`}>&#9733;</span> 
          ))}
          {Array.from({ length: 5 - Math.floor(product.rating) }, (_, index) => (
            <span key={`empty-star-${index}`}>&#9734;</span>
          ))}
        </p>
        <p className="text-black text-2xl font-bold mt-2 mb-2">{product.price}</p>
        {product.discount && (
          <span className="text-sm bg-red-100 text-red-600 py-1 px-2 rounded">
            {product.discount}
          </span>
        )}
      </div>
    ))}
                
            
             <div className="flex justify-between items-center mt-8">
    <button className="bg-black text-white px-4 py-2 rounded-full">
      Previous
    </button>
    <button className="bg-black w-200px text-white px-4 py-2 rounded-full absolute bottom-[-1050] right-10">
    Next
  </button>
  </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
