import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  name: string;
  balance: number;
  bettings: {
    id: number;
    amount: number;
    prediction: "YES" | "NO" | "PENDING";
    event: {
      title: string;
      imageUrl: string;
      result: "YES" | "NO" | "PENDING";
      totalBetting: number;
      yesBetting: number;
      noBetting: number;
    };
  }[];
}
const initialState: { user: userState | null } = { user: null };

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<userState|null>) => {
      state.user = action.payload;
    },
    updateUserBalance: (state, action: PayloadAction<number>) => {
      if (!state.user) return;
      state.user.balance += action.payload;
    },
  },
});

export const { updateUser, updateUserBalance } = userSlice.actions;
export default userSlice.reducer;
