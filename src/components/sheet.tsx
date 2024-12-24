"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenuDemo } from "./NavigationMenu";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button>
              <IoMenu/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>SHOP.CO</SheetTitle>
            </SheetHeader>
            {/* {navbar} */}
      <ul className="">
        <li className="grid grid-cols-1 gap-y-4">
          <Link href={""}><NavigationMenuDemo/></Link>
          <Link className="ml-3 text-xl" href={""}>On Sale</Link>
          <Link className="ml-3 text-xl" href={""}>New Arrivals</Link>
          <Link className="ml-3 text-xl" href={""}>Brands</Link>
        </li>
      </ul>
            
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
