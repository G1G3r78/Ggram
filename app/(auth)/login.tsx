import { View, Text, Image, TouchableOpacity } from "react-native";
import {styles} from "@/styles/auth.styles"
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { useSSO } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function Login() {

    const {startSSOFlow} = useSSO();
    const router = useRouter();
    const handleGoogleSignIn = async () => {
        try {
            const {createdSessionId,setActive}=await startSSOFlow({strategy:"oauth_google"})
            if (setActive && createdSessionId) {
                setActive({session:createdSessionId})
                router.replace("/(tabs)")
            }
        }
        catch (error) {
            alert(`OAuth error:", ${error}`);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.brandSection}>
                <View style={styles.logoContainer}>
                    <Ionicons name="logo-react" size={32} color={COLORS.primary} />
                </View>
                <Text style={styles.appName}>spotlight</Text>
                <Text style={styles.tagLine}>don't miss anything</Text>
            </View>

            <View style={styles.illustrationContainer}>
                <Image
                    source={{uri: "https://i1.sndcdn.com/artworks-bwpeL2xhWtkXkyCa-CHN5WQ-t500x500.jpg"}}
                    style={styles.illustration}
                    resizeMode="cover"
                    borderRadius={50}
                />
            </View>

            <View style={styles.loginSection}>
                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={handleGoogleSignIn} 
                    activeOpacity={0.9}
            >

                <View style={styles.googleIconContainer}>
                    <Ionicons name="logo-google" size={20} color={COLORS.surface} />
                </View>
                <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
                By continuing you agree to give all info about yourself to us
            </Text>
            </View>
        </View>
    );
}