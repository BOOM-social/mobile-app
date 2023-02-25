import { Button, StyleSheet, Text, View } from "react-native";
import DisconnectButton from "../components/buttons/DisconnectButton";
import { useAuthStore } from "../utils/authentication";

export default function Feed() {
  const toggleLogin = useAuthStore((state) => state.toggle);

  return (
    <View style={styles.container}>
      <Text>Feed page</Text>
      {/* <Button title="Logout" onPress={() => toggleLogin()} /> */}
      <DisconnectButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
