import { Alert, Image, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Input } from "@/components/Input";
import { colors } from "@/styles/colors";
import { Button } from "@/components/Button";
import { useState } from "react";
import { Link } from "expo-router";

/* 
sempre que for uma nova pagina exportar função como default
*/
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [ticketCode, setTicketCode] = useState("");

  function handleAccessCredential() {
    if (!ticketCode.trim()) {
      Alert.alert("Ingresso", "Código do ingresso é obrigatório");
      return;
    }

    console.log(ticketCode);
  }
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
            name="ticket-confirmation-outline"
            size={24}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="Código do ingresso"
            onChangeText={(value) => {
              setTicketCode(value);
            }}
          />
        </Input>

        <Button
          title="ACESSAR CREDENCIAL"
          isLoading={isLoading}
          onPress={handleAccessCredential}
        />

        <Link
          href="/register"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  );
}
