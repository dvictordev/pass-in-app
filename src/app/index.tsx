import { Text, View } from "react-native";

/* 
sempre que for uma nova pagina exportar função como default
*/
export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-green-500">
      <Text className="text-white text-2xl font-bold"> Olá mundo! </Text>
    </View>
  );
}
