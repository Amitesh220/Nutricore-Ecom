import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
    totalItems: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload
      const existingItem = state.items.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({ ...product, quantity })
      }
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      )
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      )
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload
      const item = state.items.find(item => item.id === productId)
      if (item) {
        item.quantity = Math.max(1, quantity)
        state.totalAmount = state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
        state.totalItems = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        )
      }
    }
  }
})

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
