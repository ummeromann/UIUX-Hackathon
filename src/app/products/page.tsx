import { IoMdStar } from "react-icons/io";
import Image from "next/image";

interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
}

const product: Iproducts[] = [
  {
    title: "T-shirt with Tape Details",
    id: 1,
    price: "$120",
    img_url: "/product1.png",
  },
  {
    title: "Skinny Fit Jeans",
    id: 2,
    price: "$240",
    img_url: "/product2.png",
    old_price: "$260",
  },
  {
    title: "Checkered Shirt",
    id: 3,
    price: "$180",
    img_url: "/product3.png",
  },
  {
    title: "Sleeve Striped T-shirt",
    id: 4,
    price: "$130",
    img_url: "/product4.png",
    old_price: "$160",
  },
];

const star = Array.from({ length: 5 }, (_, index) => (
  <IoMdStar key={index} />
));

export default function Products() {
  return (
    <div className="w-full h-[500px] mt-10 px-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center">NEW ARRIVALS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {product.map((data) => (
          <div key={data.id} className="bg-[#F0EEED] rounded-[20px] p-4">
            <div className="w-full h-[230px] bg-[#F0EEED] rounded-[20px]">
              <Image
                src={data.img_url}
                alt={data.title}
                className="w-full h-full rounded-[20px]"
                width={100}
                height={100}
              />
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold">{data.title}</p>

              <div className="flex text-yellow-400">
                {star.map((starElement) => starElement)}
              </div>
              <p className="text-lg font-bold mt-2">
                {data.price}{" "}
                {data.old_price && (
                  <span className="text-gray-400 font-bold line-through">{data.old_price}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="w-[218px] h-[52px] bg-gray-100 text-black rounded-full font-bold hover:bg-gray-200">
          View All
        </button>
      </div>

      <hr className="mt-10 " />
    </div>
  );
}
