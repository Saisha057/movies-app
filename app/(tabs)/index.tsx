import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1, justifyContent: "center", alignItems: "center" },
  title:{
     fontSize: 40, color: "#222", fontWeight: "bold" }, // adjust as needed
});