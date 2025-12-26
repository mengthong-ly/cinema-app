import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#202020" },
          headerTintColor: "#ffffff",
        }}
      />
    </Stack>
  );
}
