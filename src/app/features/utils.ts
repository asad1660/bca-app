import type { Vehicle } from "./types";

type RawVehicle = Omit<Vehicle, "id">;

/**
 * Generating id because it was not in the data set

 */
export function normalizeVehicles(raw: RawVehicle[]): Vehicle[] {
  return raw.map((v, index) => ({
    ...v,
    id: `${v.make}-${v.model}-${v.year}-${v.mileage}-${index}`,
  }));
}
