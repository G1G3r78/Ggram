//import { COLORS } from "@/constants/theme";
import Story from "@/components/Story";
import { STORIES } from "@/constants/mock-data";
import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/feed.styles";
import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { Redirect } from "expo-router";
import {View, Text, TouchableOpacity, ImageBackground, ScrollView, FlatList, StyleSheet, RefreshControl} from "react-native";
import {api} from "@/convex/_generated/api"
import { Loader } from "@/components/Loader";
import Post from "@/components/Post";
import { BlurView } from "expo-blur"; 
import { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function Index() {
  const {signOut}=useAuth();
  const posts = useQuery(api.posts.getFeedPosts);
  const [refreshing, setRefreshing] = useState(false);

  if(posts === undefined) return <Loader />
  if(posts.length === 0) return <NoPostsFound />

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      // tanstack query
    }, 1200)
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTtile}>spotlight</Text>
          <TouchableOpacity onPress={() => signOut()}>
            <Ionicons /*style={styles.iconPos}*/ name="log-out-outline" size={24} color={COLORS.white}/>
          </TouchableOpacity>
        </View>

        {/*<ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 60}}>
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          style={styles.storiesContainer}
          >
            {STORIES.map((story) => (
              <Story key={story.id} story={story} />
            ))}
          </ScrollView>

          {posts.map((post) => (
            <Post key={post._id} post={post}/>
          ))}
        </ScrollView>*/}

        <FlatList
          data={posts}
          renderItem={({item}) => <Post post={item} />}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 60}}
          ListHeaderComponent={<StoriesSection />}
          refreshControl={
            <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={COLORS.primary}
            />
          }
          />
    </View>
  )
};

const StoriesSection = () => {
  return (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          style={styles.storiesContainer}
          >
            {STORIES.map((story) => (
              <Story key={story.id} story={story} />
            ))}
        </ScrollView>
  )
}

const NoPostsFound = () => (
  <View
  style={{
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: 'center'
  }}
  >
    <Text style={{fontSize: 20, color: COLORS.primary}}>No posts yet...</Text>
  </View>
);