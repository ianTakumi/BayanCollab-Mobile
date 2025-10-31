import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const roles = [
  {
    id: 1,
    title: "Rider",
    description: "Maghatid ng mga produkto at order sa customers.",
    image: require("../assets/images/roleSelection/role1.png"),
    bg: "bg-green-100",
    route: "/RiderRegisterScreen",
  },
  {
    id: 2,
    title: "Cooperative",
    description: "Magbenta at mag-provide ng mga produkto at serbisyo.",
    image: require("../assets/images/roleSelection/role2.png"),
    bg: "bg-orange-100",
    route: "/CoopRegisterScreen",
  },
  {
    id: 3,
    title: "Customer",
    description: "Bumili at umorder ng mga kailangan mo.",
    image: require("../assets/images/roleSelection/role3.png"),
    bg: "bg-yellow-100",
    route: "/RegisterScreen", // bagong route para sa consumer
  },
];

export default function RoleSelect() {
  const [selectedRole, setSelectedRole] = useState<number | null>(null);
  const router = useRouter();

  const handleNext = () => {
    if (selectedRole !== null) {
      const selectedRoleData = roles.find((role) => role.id === selectedRole);
      if (selectedRoleData) {
        router.push(selectedRoleData.route);
      }
    }
  };

  return (
    <View className="flex-1 bg-white px-6 pt-12 pb-10 justify-between">
      {/* Header */}
      <View className="items-center">
        <Text className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Anong role mo?
        </Text>
        <Text className="text-gray-500 text-base text-center">
          Piliin kung ano ang gusto mong gawin at maging parte ng team!
        </Text>
      </View>

      {/* Roles */}
      <View className="gap-6">
        {roles.map((role) => (
          <TouchableOpacity
            key={role.id}
            onPress={() => setSelectedRole(role.id)}
            activeOpacity={0.8}
            className={`flex-row items-center rounded-3xl p-5 shadow-sm ${role.bg} ${
              selectedRole === role.id
                ? "border-2 border-green-500"
                : "border border-transparent"
            }`}
          >
            <Image
              source={role.image}
              className="w-24 h-24 mr-5"
              resizeMode="contain"
            />
            <View className="flex-1">
              <Text className="text-xl font-semibold text-gray-800">
                {role.title}
              </Text>
              <Text className="text-gray-600 text-base mt-1 leading-6">
                {role.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Button */}
      <View className="flex-row justify-end mt-8">
        <TouchableOpacity
          onPress={handleNext}
          disabled={selectedRole === null}
          className={`px-10 py-4 rounded-xl ${
            selectedRole !== null ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <Text className="text-white font-semibold text-lg">Mag-start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
