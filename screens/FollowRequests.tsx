import { StyleSheet, Text, View, Button } from "react-native";
import { useAuthStore } from "../utils/authentication";

export default function FollowRequests() {
  const toggleLogin = useAuthStore((state) => state.toggle);
  return (
    <View style={styles.container}>
      <Text>Leaderboard page</Text>
      <Button title="Logout" onPress={() => toggleLogin()} />
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
