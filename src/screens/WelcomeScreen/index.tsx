import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Button } from "../../components/UI/Button";
import {
  ButtonWrapper,
  CreateAccountButton,
  CreateAccountButtonText,
  Image,
  ImageWrapper,
  WelcomeBox,
  WelcomeBrand,
  WelcomeText,
  WelcomeTitle,
} from "./styles";

interface WelcomeScreenProps {
  navigation: any;
}

export const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  return (
    <DefaultLayout>
      <WelcomeBox>
        <WelcomeTitle>Welcome to</WelcomeTitle>
        <WelcomeBrand> taskdoo</WelcomeBrand>
        <WelcomeText>Please Login to your account or Create new account to continue</WelcomeText>
      </WelcomeBox>
      <ImageWrapper>
        <Image resizeMode="contain" source={require("../../assets/images/welcome.png")} />
      </ImageWrapper>

      <ButtonWrapper>
        <Button onPress={() => navigation.navigate("LoginScreen")}>Login</Button>
        <CreateAccountButton onPress={() => {}}>
          <CreateAccountButtonText>Create Account</CreateAccountButtonText>
        </CreateAccountButton>
      </ButtonWrapper>
    </DefaultLayout>
  );
};
