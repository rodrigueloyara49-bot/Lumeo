import { Image, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://placekitten.com/200/200" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Rodrigue Loyara</Text>
      <Text style={styles.info}>rod@example.com</Text>
      <Text style={styles.info}>Joined: August 2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 16 },
  name: { fontSize: 24, fontWeight: "bold" },
  info: { fontSize: 16, color: "#555", marginTop: 4 },
});