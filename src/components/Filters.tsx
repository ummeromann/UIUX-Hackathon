export default function Filters() {
  return (
    <div className="w-full lg:w-1/4 bg-gray-50 p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Filters</h3>
      
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Category</h4>
        <ul>
          {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((item, index) => (
            <li key={index}>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Price</h4>
        <input
          type="range"
          min="0"
          max="500"
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Colors</h4>
        <div className="flex space-x-2">
          {["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"].map((color, index) => (
            <div key={index} className={`${color} w-6 h-6 rounded-full cursor-pointer`}></div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Size</h4>
        <div className="flex space-x-2">
          {["XS", "S", "M", "L", "XL"].map((size, index) => (
            <button key={index} className="border px-2 py-1 rounded">
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
