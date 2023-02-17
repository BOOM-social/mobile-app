import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { useAuthStore } from "../utils/authentication";

export default function Profile() {
  const toggleLogin = useAuthStore((state) => state.toggle);
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profilePicture}
          source={require("../assets/icon.png")}
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>Username</Text>
          <Text style={styles.userDescription}>
            More info, like description or leaderboard stats
          </Text>
        </View>
      </View>
      <View style={styles.followPanel}>
        <View style={styles.followInfo}>
          <Text style={styles.followNum}>42</Text>
          <Text>Following</Text>
        </View>
        <View style={styles.followInfo}>
          <Text style={styles.followNum}>22</Text>
          <Text>Followers</Text>
        </View>
      </View>
      <Text style={styles.postTitle}>Posts</Text>
      <FlatList
        style={styles.postGrid}
        data={[...Array(13).keys()]}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              marginVertical: 8,
            }}
          >
            <Image
              style={styles.imageThumbnail}
              source={require("../assets/icon.png")}
            />
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
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
    padding: 16,
  },
  profileHeader: {
    flexDirection: "row",
    marginBottom: 16,
  },
  profilePicture: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  userInfo: {
    flexShrink: 1,
  },
  username: {
    fontWeight: "bold",
  },
  userDescription: {
    fontSize: 12,
    opacity: 0.5,
  },
  followPanel: {
    width: "auto",
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  followInfo: {
    flexDirection: "row",
    marginRight: 32,
  },
  followNum: {
    fontWeight: "bold",
    marginRight: 4,
  },
  postTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 32,
  },
  postGrid: {},
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
  },
});
