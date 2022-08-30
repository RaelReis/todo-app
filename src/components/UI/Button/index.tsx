import { DefaultButton, DefaultButtonText } from "./styles";

type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  style?: any;
};

export function Button({ children, onPress }: ButtonProps) {
  return (
    <DefaultButton onPress={onPress}>
      <DefaultButtonText>{children}</DefaultButtonText>
    </DefaultButton>
  );
}
