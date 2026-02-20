import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../index";

const selectVehicles = (state: RootState) => state.vehicles.vehicles;

const selectFilters = (state: RootState) => state.vehicles.filters;

export const selectFilteredVehicles = createSelector(
  [selectVehicles, selectFilters],
  (vehicles, filters) => {
    return vehicles.filter((vehicle) => {
      if (filters.make && vehicle.make !== filters.make) return false;

      if (filters.model && vehicle.model !== filters.model) return false;

      if (filters.minBid !== null && vehicle.startingBid < filters.minBid)
        return false;

      if (filters.maxBid !== null && vehicle.startingBid > filters.maxBid)
        return false;

      if (filters.favouritesOnly && !vehicle.favourite) return false;

      return true;
    });
  },
);
