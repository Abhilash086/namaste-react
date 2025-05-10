import { useDispatch, useSelector } from "react-redux";
import { ITEM_CLOUDINARY } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = ()=>{
    dispatch(clearCart());
  }

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price / 100, 0);

  return (
    <div className="min-h-screen bg-orange-50 p-4 md:p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-3xl font-bold text-orange-600">
            Your Food Cart
          </h2>
          <button
            onClick={handleClearCart}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            🗑️ Clear Cart
          </button>
        </div>
        <hr />

        {cartItems.map((item, idx) => (
          <div
            key={item.id + idx}
            className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-200 py-5"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img
                src={ITEM_CLOUDINARY + item.imageId}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg shadow-sm"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 max-w-xl">{item.description}</p>
                <p className="text-orange-500 font-semibold mt-1">
                  ₹{(item.price / 100).toFixed(2)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4 sm:mt-0">
              <button
                className="px-3 py-1 bg-gray-200 text-lg rounded hover:bg-gray-300"
                onClick={() => updateQuantity(item.id, -1)}
              >
                −
              </button>
              <span className="font-medium">{item.quantity}</span>
              <button
                className="px-3 py-1 bg-orange-400 text-white text-lg rounded hover:bg-orange-500"
                onClick={() => updateQuantity(item.id, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mt-6">
          <h3 className="text-2xl font-bold text-gray-700">Total:</h3>
          <p className="text-2xl font-extrabold text-orange-600">
            ₹{getTotal()}
          </p>
        </div>

        <button className="mt-8 w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg text-lg font-semibold transition">
          🍔 Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
