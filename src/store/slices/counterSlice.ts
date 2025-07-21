import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  roomPrice: number;
  addOnPrice: number;
  activityPrice: number;
  totalPrice: number;
  selectedRoomTitles: string[]; // ⬅️ Make it an array
  addOnQuantities: Record<string, Record<string, number>>;
  activityQuantities: Record<
    string,
    Record<string, Record<string, Record<string, number>>>
  >;
}

const initialState: CounterState = {
  roomPrice: 0,
  addOnPrice: 0,
  activityPrice: 0,
  totalPrice: 0,
  selectedRoomTitles: [],
  addOnQuantities: {},
  activityQuantities: {},
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.addOnPrice += action.payload.addOnPrice || 0;
      state.activityPrice += action.payload.activityPrice || 0;
      state.totalPrice = state.roomPrice + state.addOnPrice + state.activityPrice;
    },
    decrement: (state, action) => {
      state.addOnPrice -= action.payload.addOnPrice || 0;
      state.activityPrice -= action.payload.activityPrice || 0;
      state.totalPrice = Math.max(0, state.roomPrice + state.addOnPrice + state.activityPrice);
    },

    selectRoom: (state, action) => {
      const { title, price } = action.payload;
      console.log(`Selecting room: ${title} with price: ${price}`);
      console.log(state.roomPrice)
      if (!state.selectedRoomTitles.includes(title)) {
        state.selectedRoomTitles.push(title);
        state.roomPrice += price;
        state.totalPrice =
          state.roomPrice + state.addOnPrice + state.activityPrice;
      }
    },
    deselectRoom: (state, action) => {
      const { title, price } = action.payload;
    
      state.selectedRoomTitles = state.selectedRoomTitles.filter(
        (t) => t !== title
      );
    
      state.roomPrice -= price;
      state.totalPrice = Math.max(0, state.roomPrice + state.addOnPrice + state.activityPrice);
    },
    
    resetRooms: (state) => {
      state.selectedRoomTitles = [];
      state.roomPrice = 0;
      state.totalPrice = state.addOnPrice + state.activityPrice;
    },
    setAddOnQuantity: (state, action) => {
      const { title, date, quantity, price } = action.payload;
      const prev = state.addOnQuantities[title]?.[date] || 0;
      const delta = quantity - prev;

      if (!state.addOnQuantities[title]) {
        state.addOnQuantities[title] = {};
      }
      state.addOnQuantities[title][date] = quantity;

      state.addOnPrice += delta * price;
      state.totalPrice = state.roomPrice + state.addOnPrice + state.activityPrice;
    },
    resetAddOns: (state) => {
      state.addOnQuantities = {};
      state.addOnPrice = 0;
      state.totalPrice = state.roomPrice + state.activityPrice;
    },

    // counterSlice.ts

    setActivityQuantity: (state, action) => {
      const { category, title, date, timeSlot, delta } = action.payload;

      const prevQty =
        state.activityQuantities?.[category]?.[title]?.[date]?.[timeSlot] || 0;

      const updatedQty = Math.max(0, prevQty + delta);

      // Create new objects at each level to ensure re-render
      const newState = { ...state.activityQuantities };

      if (!newState[category]) newState[category] = {};
      if (!newState[category][title]) newState[category][title] = {};
      if (!newState[category][title][date]) newState[category][title][date] = {};

      newState[category][title][date][timeSlot] = updatedQty;

      state.activityQuantities = newState;
    },

    // ✅ NEW: Reset Activity
    resetActivity: (state) => {
      state.activityQuantities = {};
      state.activityPrice = 0;
      state.totalPrice = state.roomPrice + state.addOnPrice;
    },
  },
});

export const { increment, decrement, selectRoom, deselectRoom, resetRooms, setAddOnQuantity, resetAddOns, setActivityQuantity, resetActivity } = counterSlice.actions;
export default counterSlice.reducer;
