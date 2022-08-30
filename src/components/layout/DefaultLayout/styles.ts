import styled from "styled-components/native";

interface DefaultContainerProps {
  horizontalPadding: number;
  maxHeight: number;
}

export const AppContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const DefaultContainer = styled.SafeAreaView<DefaultContainerProps>`
  flex: 1;
  padding: 0 ${(props) => props.horizontalPadding && `${props.horizontalPadding}px`};
  max-height: ${(props) => props.maxHeight && `${props.maxHeight}px`};
  margin-top: auto;
  margin-bottom: auto;
`;
