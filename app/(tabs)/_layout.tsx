import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#ffffff", borderTopColor: "#ffffff" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#ffffff" },
          headerTintColor: "#ffffff",
          title: "Legend Cinema",
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#ffffff" },
          headerTintColor: "#ffffff",
          title: "About Legend Cinema",
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "trash-sharp" : "trash-outline"}
                size={24}
                color={color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
