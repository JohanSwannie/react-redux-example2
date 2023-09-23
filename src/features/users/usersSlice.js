import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Luke Green" },
  { id: "1", name: "Thomas Sheehan" },
  { id: "2", name: "Paul Frost" },
  { id: "3", name: "Graeme Proops" },
  { id: "4", name: "Dennis Dateling" },
  { id: "5", name: "Mark Willcox" },
  { id: "6", name: "Danny Redpath" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
