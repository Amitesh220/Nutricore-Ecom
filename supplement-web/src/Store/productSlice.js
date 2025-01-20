import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true
    },
    fetchProductsSuccess: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.error = null
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { 
  fetchProductsStart, 
  fetchProductsSuccess, 
  fetchProductsFailure 
} = productSlice.actions
export default productSlice.reducer
