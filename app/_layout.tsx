import { SplashScreen, Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { tokenCache } from "@/cache";
import InitialLayout from "@/components/InitialLayout";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";
import {useFonts} from 'expo-font'
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Medium": require("../assets/fonts/JetBrainsMono-Medium.ttf"),
  })
  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  /*useEffect(() => {
    if(Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync("#000");
      NavigationBar.setButtonStyleAsync("light");
    }
  }, [])*/

  return (
      <ClerkAndConvexProvider>
        <SafeAreaProvider>  
          <SafeAreaView
           style={{flex: 1, backgroundColor: "black"}}
           onLayout={onLayoutRootView}
           >
            <InitialLayout />
          </SafeAreaView>
        </SafeAreaProvider>
      </ClerkAndConvexProvider>
  );
} 