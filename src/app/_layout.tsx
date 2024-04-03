// Import your global CSS file
import { Slot } from "expo-router";
import "../styles/global.css";
import { StatusBar } from "expo-status-bar";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Loading } from "../components/Loading";

export default function Layout() {
  const [fonstLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  return (
    <>
      <StatusBar style="light" />
      {!fonstLoaded ? <Loading /> : <Slot />}
    </>
  );
}
