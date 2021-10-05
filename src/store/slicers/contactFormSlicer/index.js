import { createSlice } from "@reduxjs/toolkit";

const lastIndex = (list) => list.reduce((acc, { index }) => max(acc, index), 0);

export const contactFormSlicer = createSlice({
  name: "contact",
  initialState: {
    list: [],
  },
  reducers: {
    updateList: (state, action) => {
      try {
        state.list = action.payload.map((el, idx) => ({
          ...el,
          index: idx,
        }));
      } catch (error) {
        console.log(error);
      }
    },
    addEmptyItem: () => {
      try {
        const newItem = {
          type: "",
          value: "",
          index: lastIndex(state.list),
        };
        state.list = [...state.list, newItem];
      } catch (error) {
        console.log(error);
      }
    },
    removeItem: (index) => {
      try {
        state.list = state.list.filter((el) => el.index !== index);
      } catch (error) {
        console.log(error);
      }
    },
    updateItem: (newItem) => {
      try {
        const curPosEl = state.list.findIndex(
          (el) => el.index === newItem.index
        );
        const newList = [
          ...state.list.slice(0, curPosEl),
          newItem,
          ...state.list.slice(curPosEl + 1, state.list.length),
        ];
        state.list = newList;
      } catch (error) {
        console.log(error);
      }
    },
    getFromValues: () => {},
    convertArrayToObject: () => {},
  },
});

export const {
  updateList,
  addEmptyItem,
  removeItem,
  updateItem,
  getFromValues,
  convertArrayToObject,
} = contactFormSlicer.actions;

export default contactFormSlicer.reducer;
