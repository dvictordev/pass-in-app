import { Credential } from "@/components/Credential";
import { Header } from "@/components/Header";
import {
  Alert,
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Button } from "@/components/Button";
import { useState } from "react";

import * as ImagePicker from "expo-image-picker";

export default function Ticket() {
  const [image, setImage] = useState("");

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (result.assets) {
        setImage(result.assets[0].uri);
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Foto", "Não foi possivel selecionar a imagem");
    }
  }

  return (
    <View className="flex-1 bg-green-500 items-center pb-8">
      <Header title="Minha credencial" />
      <ScrollView
        className="-mt-28 -z-10"
        contentContainerClassName="px-8 pb-8"
        showsVerticalScrollIndicator={false}
      >
        <Credential image={image} onChangeAvatar={handleSelectImage} />
        <FontAwesome
          name="angle-double-down"
          size={24}
          color={colors.gray[300]}
          className="self-center my-4"
        />

        <Text className="text-white font-bold text-2xl mt-4">
          Compartilhar credencial
        </Text>

        <Text className="text-white font-regular text-base mt-1 mb-6">
          Mostre ao mundo por que você vai participar do Unite Summit!
        </Text>

        <Button title="COMPARTILHAR" />

        <TouchableOpacity
          activeOpacity={0.6}
          className="mt-10 w-full items-center justify-center"
        >
          <Text className="text-zinc-100 font-bold text-md">
            Remover ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
