import { Alert, Button, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Hello Rodrigue 👋 your app is working!
      </Text>
      <Button
        title="Click Me"
        onPress={() => Alert.alert("You pressed the button! 🚀")}
      />
    </View>
  );
}