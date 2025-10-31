import { useRouter } from "expo-router"; // ✅ import from expo-router
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter(); // ✅ use router hook

  const handleLogin = () => {
    // Your login logic here...
    console.log("Logging in with:", email, password);
    // Example: router.replace("/HomeScreen");
  };

  return (
    <ScrollView className="flex-1 bg-white px-6 pt-16">
      <Image
        source={require("../assets/images/login.png")}
        className="w-full h-56 mb-8"
        resizeMode="contain"
      />

      <Text className="text-2xl font-semibold text-gray-800 mb-1">
        Getting Started
      </Text>
      <Text className="text-gray-400 mb-6">
        Let's login for explore continues
      </Text>

      <Text className="text-gray-700 mb-2">Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="example@gmail.com"
        keyboardType="email-address"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
      />

      <Text className="text-gray-700 mb-2">Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
        className="border border-gray-300 rounded-xl px-4 py-3 mb-2"
      />

      <TouchableOpacity className="mb-6 self-end">
        <Text className="text-green-600 text-sm font-medium">
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-green-500 rounded-xl py-3"
      >
        <Text className="text-white text-center font-semibold text-base">
          Sign in
        </Text>
      </TouchableOpacity>

      <View className="flex-row justify-center mt-6">
        <Text className="text-gray-500">Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/RegisterScreen")}>
          {/* ✅ Expo Router navigation */}
          <Text className="text-green-600 font-medium">Sign up here</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
