import { FC } from "react";
import { Dimensions } from "react-native";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Button } from "../../components/UI/Button";

import {
  AppTitle,
  ButtonWrapper,
  Description,
  DescriptionWrapper,
  IntroImage,
  IntroImageWrapper,
  Title,
  TittleWrapper,
} from "./styles";

interface IntroScreenProps {
  navigation: any;
}

export function IntroScreen({ navigation }: IntroScreenProps) {
  const handleButton = () => {
    navigation.navigate("WelcomeScreen");
  };

  return (
    <DefaultLayout>
      <TittleWrapper>
        <Title>
          Manage your tasks & everything with <AppTitle>taskdoo</AppTitle>
        </Title>
      </TittleWrapper>
      <IntroImageWrapper>
        <IntroImage resizeMode="contain" source={require("../../assets/images/intro.png")} />
      </IntroImageWrapper>
      <DescriptionWrapper>
        <Description>Write all your task to one note, don't let</Description>
        <Description>your day do nothing</Description>
      </DescriptionWrapper>
      <ButtonWrapper>
        <Button onPress={handleButton}>Let's start</Button>
      </ButtonWrapper>
    </DefaultLayout>
  );
}
