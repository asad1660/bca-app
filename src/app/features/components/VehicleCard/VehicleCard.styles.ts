import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding: 14px;
  border-radius: 12px;
  background-color: white;
  margin-bottom: 12px;
  shadow-color: #000;
  shadow-opacity: 0.08;
  shadow-radius: 6px;
  shadow-offset: 0px 2px;
  elevation: 3;
`;

export const ImagePlaceholder = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 10px;
  background-color: #e0e0e0;
  margin-right: 12px;

  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const TopRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  flex-shrink: 1;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: #555;
  margin-top: 2px;
`;

export const FavouriteText = styled.Text`
  font-size: 18px;
`;
