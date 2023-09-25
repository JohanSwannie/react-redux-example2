import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Luke Green" },
  { id: "1", name: "Thomas Sheehan" },
  { id: "2", name: "Billy Brown" },
  { id: "3", name: "Peter Pan" },
  { id: "4", name: "Paul Frost" },
  { id: "5", name: "Graeme Proops" },
  { id: "6", name: "Dennis Dateling" },
  { id: "7", name: "Mark Willcox" },
  { id: "8", name: "Danny Redpath" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
