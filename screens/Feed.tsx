import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuthStore } from "../utils/authentication";
import React, { useState } from "react";
import { Video, AVPlaybackStatus, ResizeMode } from "expo-av";

// This component will require two main functions
// getPosts() // gets posts for a given user's feed
// getFollowingPosts() // gets posts from people a given user is following

export default function Feed() {
  const toggleLogin = useAuthStore((state) => state.toggle);

  const [posts, setPosts] = useState(dummyPosts);

  const [mode, setMode] = useState<"following" | "feed">("feed");

  const [currentUser, setCurrentUser] = useState({
    name: "Rayhan",
    profilePicture:
      "https://media.licdn.com/dms/image/D4E03AQGifA_PF339bA/profile-displayphoto-shrink_800_800/0/1666193151320?e=1682553600&v=beta&t=_EvHDKev5gwdGa3NCQCYG_FSCjbNJYK6jVkEDfUZ3XI",
  });

  return (
    <View style={styles.container}>
      <View style={styles.topMenu}>
        <Text>Profile</Text>
        <Text>Following</Text>
        <Text>Feed</Text>
        <Text>Filters</Text>
      </View>
      <FlatList data={posts} renderItem></FlatList>
      <Button title="Logout" onPress={() => toggleLogin()} />
    </View>
  );
}

const PostComponent = (post: Post, user: any) => {
  const hoursElapsed =
    (new Date().valueOf() - new Date(post.date).valueOf()) / (1000 * 60 * 60);
  const timeElapsedString =
    hoursElapsed > 24
      ? `${Math.round(hoursElapsed / 24)} days ago`
      : `${Math.round(hoursElapsed)} hours ago`;
  return (
    <View style={styles.post}>
      {post.mediaType === "image" && (
        <Image source={{ uri: post.src }} style={styles.postMedia} />
      )}
      {post.mediaType === "video" && (
        <Video
          source={{ uri: post.src }}
          style={styles.postMedia}
          isLooping
          resizeMode={ResizeMode.COVER}
        />
      )}
      <View style={styles.postOverlay}>
        <View style={styles.postContent}>
          <View style={styles.postContentHeader}>
            <Image
              source={{ uri: user.profilePicture }}
              style={styles.userProfilePicture}
            />
            <Text style={styles.postCreatorName}>{post.user}</Text>
            <Text style={styles.postTimeElapsed}>{timeElapsedString}</Text>
            <Text style={styles.postDescription}>{post.description}</Text>
            {post.hashtags.map((hashtag) => (
              <Text key={post.hashtags.indexOf(hashtag)} style={styles.hashtag}>
                #{hashtag}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.postInteractions}>
          <TouchableOpacity>
            <Text>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Report</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

interface Post {
  id: string;
  user: string;
  description: string;
  hashtags: string[];
  likes: number;
  date: string;
  src: string;
  mediaType: "video" | "image";
  action: "nature cleanup" | "green diet" | "planting" | "animals";
}

interface Comment {
  user: string;
  post: string;
  comment: string;
}

// Dummy posts - to delete
const dummyPosts: Post[] = [
  {
    id: "eoiven2ivbseroivbjksdfv9n0iw4g53wre34g",
    user: "Jemma Ray",
    description:
      "Cleaning up the ocean next to Grand Baie with @rayhan. We managed to collect 50 items of rubbish near the coral reef",
    hashtags: ["oceancleanup", "scubadive", "saveouroceans"],
    likes: 10,
    date: "Sat, 18 Feb 2023 23:24:00 GMT",
    src: "https://cdn.pixabay.com/vimeo/141851680/diving-908.mp4",
    mediaType: "video",
    action: "nature cleanup",
  },
  {
    id: "f9pvwbeq9pvbuwi83v9brojwifeuge2322fwe",
    user: "Jane Doe",
    description: "Working on planting my new garden!",
    hashtags: ["gardening", "plants", "growtheplants"],
    likes: 324300,
    date: "Fri, 17 Feb 2023 10:00:00 GMT",
    src: "blob:https://player.vimeo.com/08c9c193-30b8-40fc-86ef-61234d68ac91",
    mediaType: "video",
    action: "planting",
  },
  {
    id: "fre9gf7h29wgvpuibw4gwuevnveerg",
    user: "Maximiliano Aurelius Assimillus",
    description: "Another day, another vegan meal!",
    hashtags: ["vegan", "food", "foodie", "tasty"],
    likes: 4,
    date: "Thu, 16 Feb 2023 22:24:00 GMT",
    src: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg",
    mediaType: "image",
    action: "green diet",
  },
];
