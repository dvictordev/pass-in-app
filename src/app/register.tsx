import { Alert, Image, Text, TextInput, View } from "react-native";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { Input } from "@/components/Input";
import { colors } from "@/styles/colors";
import { Button } from "@/components/Button";
import { useState } from "react";
import { Link, router } from "expo-router";

/* 
sempre que for uma nova pagina exportar função como default
*/
export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleRegister() {
    if (!name.trim() || !email.trim()) {
      Alert.alert("Inscrição", "Preencha todos os campos!");
      return;
    }

    router.push("/ticket");
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
            name="account-circle-outline"
            size={24}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="Nome completo"
            onChangeText={(value) => setName(value)}
          />
        </Input>

        <Input>
          <MaterialCommunityIcons
            name="at"
            size={24}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
          />
        </Input>

        <Button
          title="REALIZAR INSCRIÇÃO"
          isLoading={isLoading}
          onPress={handleRegister}
        />

        <Link
          href="/"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Ja possui ingresso?
        </Link>
      </View>
    </View>
  );
}
