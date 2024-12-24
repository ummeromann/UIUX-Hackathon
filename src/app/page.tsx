import Hero from "@/components/hero";
import Fonts from "@/components/fonts";
import Products from "./products/page";
import Top_Sell from "./products/sell";
import { Button } from "@/components/ui/button";
import Dress_style from "@/components/dress_style";
import TopfourHappy from "@/components/topFour";

export default function Home() {
  return (
    <div>
    <Hero/>
    <Fonts/>
    <Products/>
    <Top_Sell/>
    <Button/>
    <Dress_style/>
    <TopfourHappy/>
    </div>
  );
}
