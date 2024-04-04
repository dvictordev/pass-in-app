import { Alert, Image, Text, TextInput, View } from "react-native";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { Input } from "@/components/Input";
import { colors } from "@/styles/colors";
import { Button } from "@/components/Button";
import { useState } from "react";
import { Link } from "expo-router";

/* 
sempre que for uma nova pagina exportar função como default
*/
export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View className="flex-1 items-center justify-center bg-green-500 p-8">
      <Image
        source={require("../assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />
      <View className="w-full mt-12 gap-3">
        <Input>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={24}
            color={colors.green[200]}
          />
          <Input.Field placeholder="Nome completo" />
        </Input>

        <Input>
          <MaterialCommunityIcons
            name="at"
            size={24}
            color={colors.green[200]}
          />
          <Input.Field placeholder="Email" />
        </Input>

        <Button title="REALIZAR INSCRIÇÃO" isLoading={isLoading} />

        <Link
          href="/register"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Ja possui ingresso?
        </Link>
      </View>
    </View>
  );
}
