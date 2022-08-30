import { responsiveFont } from "./../../styles/responsiveFont";
import styled from "styled-components/native";

export const TittleWrapper = styled.View`
  flex: 0.3;
`;
export const Title = styled.Text`
  font-size: ${responsiveFont.xxxxxlarge}px;
  color: ${(props) => props.theme.colors.white};
  font-family: "Poppins_500Medium";
`;

export const AppTitle = styled.Text`
  font-size: 36px;
  color: ${(props) => props.theme.colors.primary};
`;

export const IntroImageWrapper = styled.View`
  flex: 0.4;
  justify-content: center;
  align-items: center;
`;

export const IntroImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const DescriptionWrapper = styled.View`
  flex: 0.1;
  margin-top: 24px;
`;

export const Description = styled.Text`
  font-size: ${responsiveFont.small}px;
  color: ${(props) => props.theme.colors.grey};
  font-family: "Poppins_400Regular";
`;

export const ButtonWrapper = styled.View`
  flex: 0.2;
`;
