import { useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Button } from "../../components/UI/Button";
import { Input } from "../../components/UI/Input";
import {
  BrandText,
  ButtonWrapper,
  CreateAccountText,
  GoogleButton,
  GoogleImage,
  GoogleText,
  HighLight,
  InputWrapper,
  MoreLoginOptionWrapper,
  SignUpButton,
  TitleText,
  TittleWrapper,
} from "./styles";

export function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {};

  return (
    <DefaultLayout>
      <TittleWrapper>
        <TitleText>Sign In </TitleText>
        <BrandText>taskdoo</BrandText>
      </TittleWrapper>
      <InputWrapper>
        <Input placeholder="Username" value={username} onChangeText={setUsername} />
        <Input placeholder="Password" value={password} onChangeText={setPassword} />
      </InputWrapper>
      {/* <Separator style={styles.separator} /> */}
      <MoreLoginOptionWrapper>
        <GoogleButton>
          <GoogleImage resizeMode="contain" source={require("../../assets/images/google_icon.png")} />
          <GoogleText>Sign in with Google</GoogleText>
        </GoogleButton>
      </MoreLoginOptionWrapper>

      <ButtonWrapper>
        <Button onPress={handleLogin}>Login</Button>
        <SignUpButton onPress={() => console.log('a')}>
          <CreateAccountText>
            Don't have account ?<HighLight> Sign Up</HighLight>
          </CreateAccountText>
        </SignUpButton>
      </ButtonWrapper>
    </DefaultLayout>
  );
}
