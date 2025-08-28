import { Text, View } from "react-native";

export default function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Settings</Text>
      <Text>Customize your app preferences</Text>
    </View>
  );
}