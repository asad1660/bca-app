import React from "react";
import { Switch } from "react-native";
import { Picker } from "@react-native-picker/picker";

import {
  Container,
  Label,
  StyledInput,
  Row,
  SwitchLabel,
} from "./FilterBar.styles";

type Props = {
  makes: string[];
  models: string[];
  selectedMake: string | null;
  selectedModel: string | null;
  minBid: number | null;
  maxBid: number | null;
  favouritesOnly: boolean;
  onMakeChange: (value: string | null) => void;
  onModelChange: (value: string | null) => void;
  onBidChange: (min: number | null, max: number | null) => void;
  onToggleFavourites: () => void;
};

export function FilterBar({
  makes,
  models,
  selectedMake,
  selectedModel,
  minBid,
  maxBid,
  favouritesOnly,
  onMakeChange,
  onModelChange,
  onBidChange,
  onToggleFavourites,
}: Props) {
  return (
    <Container>
      <Label>Make</Label>
      <Picker
        selectedValue={selectedMake}
        onValueChange={(value) => onMakeChange(value === "all" ? null : value)}
      >
        <Picker.Item label="All" value="all" />
        {makes.map((make) => (
          <Picker.Item key={make} label={make} value={make} />
        ))}
      </Picker>

      <Label>Model</Label>
      <Picker
        selectedValue={selectedModel}
        onValueChange={(value) => onModelChange(value === "all" ? null : value)}
      >
        <Picker.Item label="All" value="all" />
        {models.map((model) => (
          <Picker.Item key={model} label={model} value={model} />
        ))}
      </Picker>

      <Label>Min Bid</Label>
      <StyledInput
        keyboardType="numeric"
        placeholder="Min"
        value={minBid?.toString() ?? ""}
        onChangeText={(text) => onBidChange(text ? Number(text) : null, maxBid)}
      />

      <Label>Max Bid</Label>
      <StyledInput
        keyboardType="numeric"
        placeholder="Max"
        value={maxBid?.toString() ?? ""}
        onChangeText={(text) => onBidChange(minBid, text ? Number(text) : null)}
      />

      <Row>
        <SwitchLabel>Favourites Only</SwitchLabel>
        <Switch value={favouritesOnly} onValueChange={onToggleFavourites} />
      </Row>
    </Container>
  );
}
