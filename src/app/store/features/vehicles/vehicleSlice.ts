import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vehicle } from "../../../features/types";

interface Filters {
  make: string | null;
  model: string | null;
  minBid: number | null;
  maxBid: number | null;
  favouritesOnly: boolean;
}

interface VehicleState {
  vehicles: Vehicle[];
  filters: Filters;
}

const initialState: VehicleState = {
  vehicles: [],
  filters: {
    make: null,
    model: null,
    minBid: null,
    maxBid: null,
    favouritesOnly: false,
  },
};

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    setVehicles(state, action: PayloadAction<Vehicle[]>) {
      state.vehicles = action.payload;
    },
    toggleFavourite(state, action: PayloadAction<string>) {
      const v = state.vehicles.find((x) => x.id === action.payload);
      if (v) v.favourite = !v.favourite;
    },
    setMakeFilter(state, action: PayloadAction<string | null>) {
      state.filters.make = action.payload;
    },
    setModelFilter(state, action: PayloadAction<string | null>) {
      state.filters.model = action.payload;
    },
    setBidRange(
      state,
      action: PayloadAction<{ min: number | null; max: number | null }>,
    ) {
      state.filters.minBid = action.payload.min;
      state.filters.maxBid = action.payload.max;
    },
    toggleFavouritesOnly(state) {
      state.filters.favouritesOnly = !state.filters.favouritesOnly;
    },
  },
});

export const {
  setVehicles,
  toggleFavourite,
  setMakeFilter,
  setModelFilter,
  setBidRange,
  toggleFavouritesOnly,
} = vehicleSlice.actions;

export default vehicleSlice.reducer;
