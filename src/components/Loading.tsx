import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <ActivityIndicator
      size={32}
      className="flex-1 bg-green-500 items-center justify-center text-orange-500"
    />
  );
}
