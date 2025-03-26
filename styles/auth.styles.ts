import {Dimensions, StyleSheet} from "react-native";
import { COLORS } from "@/constants/theme";

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: COLORS.background
    },
    brandSection: {
      alignItems: "center",
      marginTop: height * 0.12
    },
    logoContainer: {
      width: 60,
      height: 60,
      borderRadius: 18,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20
    },
    appName: {
      fontSize: 42, 
      fontWeight: "700",
      fontFamily: "JetBrainsMono-Medium",
      color: COLORS.primary
    },
    tagLine: {
      fontSize: 16,
      color: COLORS.grey,
      letterSpacing: 1,
      textTransform: "lowercase"
    },
    illustrationContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 48
    },
    illustration: {
      width: width*0.75,
      height: height * 0.75,
      maxHeight: 280
    },
    loginSection: {
      width: "100%",
      paddingHorizontal: 24,
      paddingBottom: 40,
      alignItems: "center"
    },
    googleButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: COLORS.white,
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 14,
      marginBottom: 20,
      width: "100%",
      maxWidth: 300,
      elevation: 5
    },
    googleIconContainer: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: "center",
      marginRight: 12
    },
    googleButtonText: {
      fontSize: 16,
      fontWeight: "600",
      color: COLORS.surface
    },
    termsText: {
      textAlign: "center",
      fontSize: 12,
      color: COLORS.grey,
      maxWidth: 200
    },
    signOutContainer: {
      backgroundColor: "#3443eb55",
      width: "75%",
      height: "50%",
      //transform: "translate(25%, 50%)",
      margin: "auto",
      justifyContent: "center",
      textAlign: "center",
      //top: "50%",
      borderRadius: 15
    },
    imageSignout: {
        //width: "100%",
        //height: "100%",
        resizeMode: "cover",
        borderRadius: 15
    },
    signOutText: {
      textAlign: "center",
      justifyContent: "center",
      fontSize: 50,
      color: COLORS.white,
      //top: "50%"
    }
  }
)