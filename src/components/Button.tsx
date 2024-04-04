import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.6}
      className="w-full bg-orange-400 h-14 rounded-lg items-center justify-center flex"
    >
      {isLoading ? (
        <ActivityIndicator className="text-green-500" />
      ) : (
        <Text className="text-sm font-bold text-green-500">{title}</Text>
      )}
    </TouchableOpacity>
  );
}
