import { Icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TabIcon = ({ nameIcon, focused }: { nameIcon: string; focused: boolean }) => {
  return (
    <View
      className="flex flex-row w-full flex-1 justify-center items-center"
    >
      <Image
        source={Icons[nameIcon as keyof typeof Icons]}
        className={`w-8 h-8 ${focused ? 'tint-blue-500' : 'tint-gray-400'}`}
      />
    </View>
  );
};

const _Layout = () => {
  return (
    <SafeAreaView className="flex-1">

      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                nameIcon={"home"}
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                nameIcon={"search"}
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="saved"
          options={{
            title: "Saved",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                nameIcon={"saved"}
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                nameIcon={"profile"}
                focused={focused}
              />
            ),
          }}
        />

      </Tabs>
    </SafeAreaView>
  )
}

export default _Layout;