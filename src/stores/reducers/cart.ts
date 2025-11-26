import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Food } from '../../pages/Home'

type CartState = {
  items: Food[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    addToCart: (state, action: PayloadAction<Food>) => {
      state.items.push(action.payload)
    }
  }
})

export const { open, close, addToCart } = cartSlice.actions
export default cartSlice.reducer
