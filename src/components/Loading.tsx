import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View className="flex-1 bg-green-500 items-center justify-center">
      <ActivityIndicator size={32} color="#fff" />
    </View>
  );
}
