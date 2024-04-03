import { TextInput, View } from "react-native";

function Input({ children }: { children: React.ReactNode }) {
  return <View>{children}</View>;
}

function Field() {
  return <TextInput />;
}

Input.Field = Field;

export { Input };
