import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useAuthStore } from "../utils/authentication";
import { AntDesign } from "@expo/vector-icons";
import Divider from "../components/Divider";

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
        <AntDesign name="right" size={22} color="gray" />
      </View>
      <Divider />
      <Text style={styles.date}>New</Text>
      <View style={styles.notificationPanel}>
        <Image
          style={styles.profilePicture}
          source={require("../assets/icon.png")}
        />
        <Text style={styles.notificationDescription}>
          <Text style={styles.profileName}>karenne</Text> liked your photo.
        </Text>
        <Image
          style={styles.notificationImage}
          source={require("../assets/icon.png")}
        />
      </View>
      <Divider />
      <Text style={styles.date}>Today</Text>
      <View style={styles.notificationPanel}>
        <Image
          style={styles.profilePicture}
          source={require("../assets/icon.png")}
        />
        <Text style={styles.notificationDescription}>
          <Text style={styles.profileName}>kiero, zackjohn</Text> and 26 others
          liked your photo.
        </Text>
        <Image
          style={styles.notificationImage}
          source={require("../assets/icon.png")}
        />
      </View>
      <Button title="Logout" onPress={() => toggleLogin()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 16,
    marginLeft: 16,
  },
  followRequestPanel: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    marginLeft: 16,
  },
  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  followRequestsText: {
    marginHorizontal: 16,
  },
  date: {
    fontWeight: "bold",
    marginLeft: 16,
    marginBottom: 16,
  },
  notificationPanel: {
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileName: { fontWeight: "bold" },
  notificationDescription: {
    marginHorizontal: 16,
    flex: 4,
    fontSize: 12,
  },
  notificationImage: {
    height: 40,
    width: 40,
  },
});
