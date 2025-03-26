import { Tabs } from "expo-router";
import {View, Text, Platform} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import {BlurView} from "expo-blur";


const BlurBar = () => {
    return (
        <BlurView
        intensity={50}
        style={{flex: 1, backgroundColor: "#00000022"}}
        >
        </BlurView>
    )
}

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: true,
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.grey,
                tabBarBackground: () => (Platform.OS === "ios" || "web" ? <BlurBar /> : null),
                tabBarStyle: {
                    backgroundColor: Platform.OS === "ios" || "web" ? "rgba(0,0,0, 0.5)" : "#000",
                    borderTopWidth: 0,
                    position: "absolute",
                    elevation: 2,
                    height: 80,
                    paddingBottom: 8,
                    //backdropFilter: "blur(5px)"
                }
            }}
        >
            <Tabs.Screen
                name="index" options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color} />
                }}/>
            <Tabs.Screen
                name="bookmarks" options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="bookmark" size={size} color={color} />
                }}/>
            <Tabs.Screen
                name="create" options={{
                    tabBarIcon: ({size}) => <Ionicons name="add-circle" size={size} color={COLORS.primary} />
                }}/>
            <Tabs.Screen
                name="notifications" options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="heart" size={size} color={color} />
                }}/>
            <Tabs.Screen
                name="profile" options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="person-circle" size={size} color={color} />
                }}/>
        </Tabs>
    )
}
