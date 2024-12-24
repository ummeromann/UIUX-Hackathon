export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Your Cart</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-white p-4 sm:p-6 rounded-lg shadow-md">

            <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 mb-4">
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <img
                  src="/product14.png"
                  alt="Gradient Graphic T-shirt"
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">Gradient Graphic T-shirt</h3>
                  <p className="text-sm text-gray-500">Size: Large</p>
                  <p className="text-sm text-gray-500">Color: White</p>
                  <p className="mt-2 text-lg sm:text-2xl font-bold">$145</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                    -
                  </button>
                  <span className="px-4">1</span>
                  <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                    +
                  </button>
                </div>
                <button className="text-red-600 hover:text-red-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 sm:w-6 h-5 sm:h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            
            <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 mb-4">
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <img
                  src="/product3.png"
                  alt="Checkered Shirt"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">Checkered Shirt</h3>
                  <p className="text-sm text-gray-500">Size: Medium</p>
                  <p className="text-sm text-gray-500">Color: Red</p>
                  <p className="mt-2 text-lg sm:text-2xl font-bold">$180</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                    -
                  </button>
                  <span className="px-4">1</span>
                  <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                    +
                  </button>
                </div>
                <button className="text-red-600 hover:text-red-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 sm:w-6 h-5 sm:h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            
            <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 mb-4">
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <img
                  src="/product2.png"
                  alt="Skinny Fit Jeans"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">Skinny Fit Jeans</h3>
                  <p className="text-sm text-gray-500">Size: Large</p>
                  <p className="text-sm text-gray-500">Color: Blue</p>
                  <p className="mt-2 text-lg sm:text-2xl font-bold">$240</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                    -
                  </button>
                  <span className="px-4">1</span>
                  <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                    +
                  </button>
                </div>
                <button className="text-red-600 hover:text-red-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 sm:w-6 h-5 sm:h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-4 bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-bold mb-6">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p className="font-bold">$565</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Discount (-20%)</p>
              <p className="font-bold text-red-500">-$113</p>
            </div>
            <div className="flex justify-between mb-6">
              <p>Delivery Fee</p>
              <p className="font-bold">$15</p>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <p>Total</p>
              <p className="text-2xl">$467</p>
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full px-4 py-2 border rounded-lg mb-4"
              />
              <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800">
                Apply
              </button>
            </div>
            <button className="w-full mt-4 py-3 bg-black text-white rounded-lg hover:bg-black">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

