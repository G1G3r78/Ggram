import { Text, View, TouchableOpacity, Image } from "react-native";
import {styles} from "../styles/auth.styles";
import { Pressable } from "react-native-gesture-handler";
import { Link, Redirect } from "expo-router";

export default function Index() {
  return (
    <Redirect href="../(auth)/login" />
  );
}
