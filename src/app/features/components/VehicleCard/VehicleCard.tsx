import React from "react";
import { Text } from "react-native";
import type { Vehicle } from "../../types";

import { useCountdown } from "../../../features/hooks/useCountdown";

import {
  CardContainer,
  ImagePlaceholder,
  ContentContainer,
  TopRow,
  Title,
  InfoText,
  FavouriteText,
} from "./VehicleCard.styles";

type Props = {
  vehicle: Vehicle;
  onToggleFavourite: (id: string) => void;
  onPress?: () => void;
};

export function VehicleCard({ vehicle, onToggleFavourite, onPress }: Props) {
  const { days, hours, minutes, expired } = useCountdown(
    vehicle.auctionDateTime,
  );

  return (
    <CardContainer activeOpacity={0.8} onPress={onPress}>
      <ImagePlaceholder>
        <Text>Image</Text>
      </ImagePlaceholder>

      <ContentContainer>
        <TopRow>
          <Title numberOfLines={1}>
            {vehicle.make} {vehicle.model}
          </Title>

          <FavouriteText onPress={() => onToggleFavourite(vehicle.id)}>
            {vehicle.favourite ? "❤️" : "🤍"}
          </FavouriteText>
        </TopRow>

        <InfoText>
          {vehicle.year} • {vehicle.fuel}
        </InfoText>

        <InfoText>
          {expired
            ? "Auction Ended"
            : `${days}d ${hours}h ${minutes}m remaining`}
        </InfoText>

        <InfoText>Starting Bid: ${vehicle.startingBid}</InfoText>
      </ContentContainer>
    </CardContainer>
  );
}
