import styled from "styled-components/native";

export const Container = styled.View`
  padding: 16px;
  background-color: #ffffff;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const StyledInput = styled.TextInput`
  border-width: 1px;
  border-color: #ddd;
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const SwitchLabel = styled.Text`
  font-size: 14px;
`;
