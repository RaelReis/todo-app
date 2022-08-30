import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { responsiveFont } from "../../styles/responsiveFont";
import { Button } from "../../components/UI/Button";

const { height } = Dimensions.get("screen");

export const TittleWrapper = styled.View`
  max-height: ${height * 0.25}px;
`;

export const TitleText = styled.Text`
  font-size: ${responsiveFont.giga}px;
  color: ${(props) => props.theme.colors.white};
  font-family: "Poppins_500Medium";
`;

export const BrandText = styled.Text`
  font-size: ${responsiveFont.giga}px;
  color: ${(props) => props.theme.colors.white};
  font-family: "Poppins_500Medium";
  color: ${(props) => props.theme.colors.primary};
`;

export const InputWrapper = styled.View`
  height: ${height * 0.3}px;
`;

export const Separator = styled.View`
  height: ${height * 0.1}px;
`;

export const MoreLoginOptionWrapper = styled.View`
  height: height * 0.2;
`;

export const GoogleButton = styled.TouchableOpacity`
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding: height * 0.02 height * 0.015;
`;

export const GoogleImage = styled.Image`
  width: 20%;
  height: 100%;
`;

export const GoogleText = styled.Text`
  font-size: ${responsiveFont.medium}px;
  color: ${(props) => props.theme.colors.black};
  font-family: "Poppins_500Medium";
`;

export const ButtonWrapper = styled.View`
  height: height * 0.2;
`;

export const SignUpButton = styled(Button)`
  align-items: center;
  justify-content: center;
`;

export const CreateAccountText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-family: "Poppins_400Regular";
  margin-top: 15px;
`;

export const HighLight = styled.Text`
  margin-left: 5px;
  color: ${(props) => props.theme.colors.primary};
  font-family: "Poppins_400Regular";
  font-size: ${responsiveFont.tiny}px;
`;
