import styled from "styled-components/native";
import { responsiveFont } from "../../../styles/responsiveFont";

export const DefaultButton = styled.TouchableOpacity`
  margin-top: auto;
  padding: 10px 0;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  border-radius: 10px;
`;

export const DefaultButtonText = styled.Text`
  font-size: ${responsiveFont.large}px;
  color: ${(props) => props.theme.colors.white};
  font-family: "Poppins_400Regular";
`;
