import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { MenuFood } from '../../pages/Home'

type CartState = {
  itemsCardapio: MenuFood[]
  isOpen: boolean
}

const initialState: CartState = {
  itemsCardapio: [],
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
    addToCart: (state, action: PayloadAction<MenuFood>) => {
      state.itemsCardapio.push(action.payload)
    },
    removeToCart: (state, action: PayloadAction<number>) => {
      const index = state.itemsCardapio.findIndex(
        (item) => item.id === action.payload
      )

      if (index !== -1) {
        state.itemsCardapio.splice(index, 1)
      }
    },
    clear: (state) => {
      state.itemsCardapio = []
    }
  }
})

export const { open, close, addToCart, removeToCart, clear } = cartSlice.actions
export default cartSlice.reducer
