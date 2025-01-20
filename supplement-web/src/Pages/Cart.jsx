import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../Store/CartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, totalAmount } = useSelector((state) => state.cart)
  const [selectedItems, setSelectedItems] = useState([])

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId))
  }

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ productId, quantity: newQuantity }))
    }
  }

  const handleSelectItem = (productId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    )
  }

  const calculateSelectedTotal = () => {
    return items
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">
          Nothing here yet, but your next favorite is just a click away!</p>
      ) : (
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleSelectItem(item.id)}
                className="mr-4"
              />
              <img
                src={item.image || '/placeholder-image.png'}
                alt={item.name || 'Product Image'}
                className="w-12 h-12 rounded-md"
              />
              <div className="flex-1 ml-4">
                <h2 className="font-semibold text-gray-900">{item.name}</h2>
                <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleUpdateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="w-16 border rounded-md text-center"
                />
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="ml-4 text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8 text-right">
            <p className="text-xl font-bold text-gray-900">
              Checked ₹{calculateSelectedTotal()}
            </p>
            <p className="text-2xl font-bold text-gray-900">
              Cart Total: ₹{totalAmount.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
