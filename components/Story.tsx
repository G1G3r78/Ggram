import { styles } from "@/styles/feed.styles";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Story = {
    id: string;
    username: string;
    avatar: string;
    hasStory: boolean
};

export default function Story({story}: {story: Story}) {
    if(story.hasStory) {
        return (
            <TouchableOpacity style={styles.storyWrapper}>
                <View style={styles.storyRing}>
                    <Image source={{uri: story.avatar}} style={styles.storyAvatar} />
                </View>
                <Text style={styles.storyUsername}>{story.username}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity style={styles.storyWrapper}>
            <View style={styles.noStory}>
                <Image source={{uri: story.avatar}} style={styles.storyAvatar} />
            </View>
            <Text style={styles.storyUsername}>{story.username}</Text>
        </TouchableOpacity>
    )
}