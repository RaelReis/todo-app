import { ReactNode } from "react";
import { AppContainer, DefaultContainer } from "./styles";
import { Dimensions } from "react-native";

interface DefaultLayoutProps {
  children: ReactNode;
}

const { width, height } = Dimensions.get("screen");

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const horizontalPadding = width * 0.1;
  const maxHeight = height * 0.8;

  return (
    <AppContainer>
      <DefaultContainer horizontalPadding={horizontalPadding} maxHeight={maxHeight}>
        {children}
      </DefaultContainer>
    </AppContainer>
  );
}
