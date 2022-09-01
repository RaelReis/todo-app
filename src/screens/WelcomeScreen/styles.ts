import styled from "styled-components/native";
import { Button } from "../../components/UI/Button";
import { responsiveFont } from "../../styles/responsiveFont";

export const WelcomeBox = styled.View`
  flex: 0.3;
`;

export const WelcomeBrand = styled.Text`
  text-align: center;
  font-size: ${responsiveFont.xxxxxlarge}px;
  font-family: "Poppins_500Medium";
  color: ${(props) => props.theme.colors.primary};
`;

export const WelcomeTitle = styled.Text`
  text-align: center;
  font-size: ${responsiveFont.xxxxxlarge}px;
  font-family: "Poppins_500Medium";
  color: ${(props) => props.theme.colors.white};
`;

export const WelcomeText = styled.Text`
  margin: 0 10px;
  text-align: center;
  font-size: ${responsiveFont.small}px;
  font-family: "Poppins_400Regular";
  color: ${(props) => props.theme.colors.grey};
`;

export const ImageWrapper = styled.View`
  flex: 0.4;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ButtonWrapper = styled.View`
  flex: 0.3;
`;


export const CreateAccountButton = styled.TouchableOpacity`
  margin-top: 20px;
  border-width: 3px;
  border-color: ${(props) => props.theme.colors.primary};
  background-color: transparent;

  padding: 10px 0;
  align-items: center;
  border-radius: 10px;
`;

export const CreateAccountButtonText = styled.Text`
    
`
