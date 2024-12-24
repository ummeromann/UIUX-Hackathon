import { IoMdStar } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

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
    title: "Polo with Contrast Trims",
    id: 1,
    price: "$212",
    img_url: "/product13.png",
    old_price: "$242",
  },

  {
    title: "Gradient Graphic T-shirt",
    id: 2,
    price: "$145",
    img_url: "/product14.png",
  },

  {
    title: "Polo with Tipping Details",
    id: 3,
    price: "$180",
    img_url: "/product15.png",
  },

  {
    title: "Black Striped T-shirt",
    id: 4,
    price: "$120",
    img_url: "/product16.png",
    old_price: "$150",
  },
];

let star = [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />];

export default function Clothes() {
  return (    
    <div className="w-full h-auto mt-20 px-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center py-10">YOU MIGHT ALSO LIKE</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {product.map((data) => {
          return (
            <li key={data.id} className="bg-[#F0EEED] rounded-[20px] p-4">
              <Link href={`/products/${data.id}`}>
                <div className="w-full h-[230px] bg-[#F0EEED] rounded-[20px]">
                  <Image
                    src={data.img_url}
                    alt={data.title}
                    className="w-full h-full rounded-[20px]"
                    width={100}
                    height={100}
                  />
                </div>
              </Link>
              <div className="mt-4">
                <p className="text-lg font-bold">{data.title}</p>
                <div className="flex text-yellow-400">
                {star.map((starElement, index) => (
                  <span key={index}>{starElement}</span>
                ))}
              </div>
                <p className="text-lg font-bold mt-2">
                  {data.price}{" "}
                  {data.old_price && (
                    <span className="text-gray-400 font-bold line-through">{data.old_price}</span>
                  )}
                </p>
              </div>
            </li>
          );
        })}
      </div>
</div>
  );
}

