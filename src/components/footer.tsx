import { IoLogoTwitter } from "react-icons/io";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="mt-[50px]">
      <div
        className="max-w-[1240px] h-[180px] bg-[#000000] mx-auto rounded-[20px] grid items-center px-8 sm:px-16"
      >
        <h3
          className="text-white font-extrabold text-[30px] sm:text-[40px] leading-[35px] sm:leading-[45px] text-center"
        >
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
        </h3>
      </div>

      <section
        className="max-w-[1240px] mx-auto mt-8 grid grid-cols-1 sm:grid-cols-5 gap-8 text-black px-6 sm:px-0"
      >
        <div className="sm:col-span-1 pl-6">
          <h3 className="text-[20px] font-extrabold">SHOP.CO</h3>
          <p className="text-[14px] mt-2">
            We have clothes that suit your style and which you’re proud to wear. From
            women to men.
          </p>

          <div className="flex gap-4 mt-4">
            <span className="w-6 h-6 bg-gray-200 flex items-center justify-center rounded-full text-sm sm:text-base">
              <IoLogoTwitter />
            </span>
            <span className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-full text-sm sm:text-base">
              <LuFacebook />
            </span>
            <span className="w-6 h-6 bg-gray-200 flex items-center justify-center rounded-full text-sm sm:text-base">
              <FaInstagram />
            </span>
            <span className="w-6 h-6 bg-gray-200 flex items-center justify-center rounded-full text-sm sm:text-base">
              <FaGithub />
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-[16px] font-semibold pl-10">COMPANY</h4>
          <ul className="text-[14px] mt-4 space-y-2 pl-10">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[16px] font-semibold">HELP</h4>
          <ul className="text-[14px] mt-4 space-y-2">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[16px] font-semibold">FAQ</h4>
          <ul className="text-[14px] mt-4 space-y-2">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[16px] font-semibold">RESOURCES</h4>
          <ul className="text-[14px] mt-4 space-y-2">
            <li>Free eBooks</li>
            <li>Development Tutorials</li>
            <li>How-to Blog</li>
            <li>YouTube Playlist</li>
          </ul>
        </div>
      </section>

      <div className="max-w-[1240px] mx-auto mt-8 border-t border-gray-200 py-4 text-center text-[14px]">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
      </div>
    </div>
  );
}
