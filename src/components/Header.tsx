import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./NavigationMenu";

export default function Header() {
  return (
    <header className=" w-full h-[50px] bg-white flex justify-between items-center">
      <div className="flex justify-center items-center">
        <SheetSide/>
        <h1 className="text-xl sm:text-3xl font-bold pl-2">SHOP.CO</h1>
      </div>
      
      <ul className="hidden md:block">
        <li className="space-x-5 text-xl flex items-center">
          <Link href={"/shop"}><NavigationMenuDemo/></Link>
          <Link href={""}>On Sale</Link>
          <Link href={"/new_arrivals"}>New Arrivals</Link>
          <Link href={""}>Brands</Link>
        </li>
      </ul>
      

        <div className="hidden md:block">
        <div className="flex justify-start items-center W-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
          <CiSearch className="text-xl ml-2"/>
          <input placeholder="search item..." className="w-full h-full rounded-[62px] ml-2 outline-none bg-[#F0F0F0]"></input>
        </div>
        </div>
   
      <ul>
      <li className="flex items-center mr-7 space-x-5">
      <Link href={"/cart"}><LuShoppingCart className="text-2xl"/></Link>
      <CiSearch className="text-xl ml-2 md:hidden"/>
      <IoMdContact className="text-2xl"/>
      </li>
      </ul>
    </header>
  );
}
