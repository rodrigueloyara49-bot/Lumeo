import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Login() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Page</Text>
      <Button title="Go back Home" onPress={() => router.push("/")} />
    </View>
  );
}