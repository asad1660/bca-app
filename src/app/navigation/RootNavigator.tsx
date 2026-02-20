import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VehicleListScreen } from "../features/screens/VehicleList/VehicleListScreen";
import { VehicleDetailsScreen } from "../features/screens/VehicleDetails/VehicleDetailsScreen";

export type RootStackParamList = {
  VehicleList: undefined;
  VehicleDetails: { vehicleId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="VehicleList"
          component={VehicleListScreen}
          options={{ title: "Vehicles" }}
        />
        <Stack.Screen
          name="VehicleDetails"
          component={VehicleDetailsScreen}
          options={{ title: "Vehicle Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
