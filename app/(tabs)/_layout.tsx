import { Tabs } from "expo-router";
import { ImageBackground } from "react-native";

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused}) => (
           <>
            <ImageBackground 
              source={ focused 
                ? require('../assets/icons/home.png') 
                : require('../assets/icons/home.png') }
              style={{ width: 20, height: 20 }}
            />
           </>
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false
        }}
      />

    </Tabs>
  )
}

export default _Layout;