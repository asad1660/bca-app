import React from "react";
import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../../navigation/RootNavigator";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { toggleFavourite } from "../../../store/features/vehicles/vehicleSlice";

type Props = NativeStackScreenProps<RootStackParamList, "VehicleDetails">;

export function VehicleDetailsScreen({ route }: Props) {
  const { vehicleId } = route.params;

  const dispatch = useAppDispatch();

  const vehicle = useAppSelector((state) =>
    state.vehicles.vehicles.find((v) => v.id === vehicleId),
  );

  if (!vehicle) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Vehicle not found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        {vehicle.make} {vehicle.model}
      </Text>

      <Text>Year: {vehicle.year}</Text>
      <Text>Fuel: {vehicle.fuel}</Text>
      <Text>Engine Size: {vehicle.engineSize}</Text>
      <Text>Mileage: {vehicle.mileage}</Text>
      <Text>Auction: {vehicle.auctionDateTime}</Text>
      <Text>Starting Bid: ${vehicle.startingBid}</Text>

      <Text
        style={{ marginTop: 20, fontSize: 20 }}
        onPress={() => dispatch(toggleFavourite(vehicle.id))}
      >
        {vehicle.favourite ? "❤️ Remove Favourite" : "🤍 Add Favourite"}
      </Text>
    </View>
  );
}
