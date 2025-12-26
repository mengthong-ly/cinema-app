import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationbar: {
    backgroundColor: "#202020",
  },
  header: {
    color: "#ffffff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  text: {
    color: "#303030",
    fontSize: 20,
    fontWeight: "600",
  },
});
