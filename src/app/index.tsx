import { Image, Text, TextInput, View } from "react-native";

import { Input } from "@/components/Input";

/* 
sempre que for uma nova pagina exportar função como default
*/
export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-green-500">
      <Image
        source={require("../assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />
      <View>
        <Input>
          <Input.Field />
        </Input>
      </View>
    </View>
  );
}
