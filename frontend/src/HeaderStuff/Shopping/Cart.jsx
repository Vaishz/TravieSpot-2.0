import React from 'react';
import { useCart } from 'react-use-cart';

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Cart ({totalUniqueItems})</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between border-b-2 py-2">
            <div className="flex items-center">
              <img
                src={item.src}
                className="w-12 h-12 object-cover mr-4"
                alt={item.name}
              />
              <div>
                <p className="font-semibold">{item.quantity} x {item.name}</p>
                <p className="text-gray-500">${item.price} ({item.quantity}x)</p>
                <p className='text-green-700'>Total Price: ${item.price * item.quantity}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                className="text-black mr-2 cursor-pointer w-8 h-8"
              >
                -
              </button>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                className="text-black mr-2 cursor-pointer w-7 h-7"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 cursor-pointer w-8 h-8"
              >
                &times;
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className='text-3xl'>Total is : ${cartTotal}</p>
    </div>
  );
}

export default Cart;
