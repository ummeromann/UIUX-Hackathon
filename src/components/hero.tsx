import Image from "next/image"
export default function Hero(){
  return (
    <main className="w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between items-start bg-[#F2F0F1]">
      
      <div className="w-full md:w-[500px] mt-3 md:mt-10 md:ml-10 pl-3">
        <h1 className="text-2xl md:text-5xl font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className="text-sm md:mt-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className="bg-black py-2 px-8 rounded-[16px] mt-4 text-sm text-white">Shop Now</button>
      </div>
      
      <div className="relative">
        <Image src={"/image.png"} className="w-[435px] mr-10" width={200} height={200} alt="Profile"></Image>
      
        <Image src={"/vector.png"} className="w-[40px] md:w-[50px] absolute top-[120px] left-5 md:top-[200px] md:left-[-40px]" width={200} height={200} alt="Profile"></Image>
        <Image src={"/vector.png"} className="w-[60px] md:w-[70px] absolute top-[8px] md:top-[40px] right-6 md:right-[40px]" width={200} height={200} alt="Profile"></Image>
      </div>
    </main>
  )
}