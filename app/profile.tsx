import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>User Profile</Text>
      <Text>Here is your profile information</Text>
    </View>
  );
}