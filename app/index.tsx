import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const handleLike = (post: string) => {
    Alert.alert(`You liked ${post}!`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hello Rodrigue 👋</Text>
      <Text style={styles.subtitle}>Welcome to Lumeo!</Text>

      <View style={styles.post}>
        <Text style={styles.postTitle}>Post 1</Text>
        <Text>This is the first example post.</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleLike("Post 1")}>
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.post}>
        <Text style={styles.postTitle}>Post 2</Text>
        <Text>This is another example post.</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleLike("Post 2")}>
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 8 },
  subtitle: { fontSize: 18, marginBottom: 16 },
  post: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  postTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 4 },
  button: {
    backgroundColor: "#6200EE",
    padding: 8,
    borderRadius: 6,
    marginTop: 8,
    alignSelf: "flex-start",
  },
  buttonText: { color: "#fff" },
});
