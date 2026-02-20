import React, { useEffect, useMemo } from "react";
import { FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import rawVehicles from "../../../../../assets/vehicles.json";
import { normalizeVehicles } from "../../utils";

import { RootStackParamList } from "../../../navigation/RootNavigator";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import {
  setVehicles,
  toggleFavourite,
  setMakeFilter,
  setModelFilter,
  setBidRange,
  toggleFavouritesOnly,
} from "../../../store/features/vehicles/vehicleSlice";

import { selectFilteredVehicles } from "../../../store/features/vehicles/selectors";

import { Container } from "./VehicleList.styles";
import { VehicleCard } from "../../components/VehicleCard/VehicleCard";
import { FilterBar } from "../../components/FilterBar/FilterBar";

type Props = NativeStackScreenProps<RootStackParamList, "VehicleList">;

export function VehicleListScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();

  const allVehicles = useAppSelector((state) => state.vehicles.vehicles);

  const vehicles = useAppSelector(selectFilteredVehicles);

  const filters = useAppSelector((state) => state.vehicles.filters);

  useEffect(() => {
    const normalized = normalizeVehicles(rawVehicles as any);
    dispatch(setVehicles(normalized));
  }, [dispatch]);

  const makes = useMemo(
    () => Array.from(new Set(allVehicles.map((v) => v.make))),
    [allVehicles],
  );

  const models = useMemo(
    () => Array.from(new Set(allVehicles.map((v) => v.model))),
    [allVehicles],
  );

  return (
    <Container>
      <FlatList
        ListHeaderComponent={
          <FilterBar
            makes={makes}
            models={models}
            selectedMake={filters.make}
            selectedModel={filters.model}
            minBid={filters.minBid}
            maxBid={filters.maxBid}
            favouritesOnly={filters.favouritesOnly}
            onMakeChange={(value) => dispatch(setMakeFilter(value))}
            onModelChange={(value) => dispatch(setModelFilter(value))}
            onBidChange={(min, max) => dispatch(setBidRange({ min, max }))}
            onToggleFavourites={() => dispatch(toggleFavouritesOnly())}
          />
        }
        data={vehicles}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <VehicleCard
            vehicle={item}
            onToggleFavourite={(id) => dispatch(toggleFavourite(id))}
            onPress={() =>
              navigation.navigate("VehicleDetails", {
                vehicleId: item.id,
              })
            }
          />
        )}
      />
    </Container>
  );
}
