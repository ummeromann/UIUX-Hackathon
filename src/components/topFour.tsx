import { FaStar } from "react-icons/fa";

export default function TopfourHappy() {
  return (
    <div className="px-6 sm:px-16 mt-10">
      <div className="text-3xl md:text-4xl font-extrabold">
        <h3 className="flex rounded-[20px] pt-[20px] ">
          OUR HAPPY CUSTOMERS
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <div className="border-[1px] rounded-[20px] p-6">
          <div className="flex gap-[5.31px] relative">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} size={16} color="gold" />
            ))}
          </div>
          <div className="mt-4">
            <p className="font-bold">Sarah M.</p>
            <p className="text-sm mt-2">
              "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            </p>
          </div>
        </div>

        <div className="border-[1px] rounded-[20px] p-6">
          <div className="flex gap-[5.31px] relative">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} size={16} color="gold" />
            ))}
          </div>
          <div className="mt-4">
            <p className="font-bold">Alex K.</p>
            <p className="text-sm mt-2">
              "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
            </p>
          </div>
        </div>

        <div className="border-[1px] rounded-[20px] p-6">
          <div className="flex gap-[5.31px] relative">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} size={16} color="gold" />
            ))}
          </div>
          <div className="mt-4">
            <p className="font-bold">James L.</p>
            <p className="text-sm mt-2">
              "As someone who's always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
