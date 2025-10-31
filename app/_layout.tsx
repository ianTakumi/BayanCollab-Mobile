import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import "../index.css";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  // 👈 default export required!
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        }
        persistor={persistor}
      >
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="OnboardingScreen" />
          <Stack.Screen name="RoleSelectionScreen" />
          <Stack.Screen name="LoginScreen" />
          <Stack.Screen name="RegisterScreen" />
        </Stack>
        <StatusBar style="auto" />
      </PersistGate>
    </Provider>
  );
}
