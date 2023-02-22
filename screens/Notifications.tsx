import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useAuthStore } from "../utils/authentication";

export default function Notifications() {
  const toggleLogin = useAuthStore((state) => state.toggle);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Follow Requests</Text>
      <View style={styles.followRequestPanel}>
        <Image
          style={styles.profilePicture}
          source={require("../assets/icon.png")}
        />
        <Text style={styles.followRequestsText}>karenne +10 others</Text>
      </View>
      <Button title="Logout" onPress={() => toggleLogin()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 16,
  },
  followRequestPanel: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 32,
  },
  followRequestsText: {},
});
