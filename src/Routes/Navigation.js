// src/route/navigation.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
// Giả sử có SettingsScreen
import HomeScreen from "../Pages/Home/HomeScreen";
import DetailScreen from "../Pages/Detail/DetailScreen";
// ProfileNavigation
import Profile from "../Pages/Profile/Profile";
import EditProfile from "../Pages/Profile/EditProfile";
import SettingsScreen from "../Pages/Settings/SettingsScreen";
import ChangePasswordScreen from "../Pages/Settings/ChangePasswordScreen";
import RewardMember from "../Pages/Profile/RewardMember";
import Points from "../Pages/Profile/Points";
import PointsHistory from "../Pages/Profile/PointsHistory";

import AccountScreen from "../Pages/Account/AccountScreen";
import NotificationScreen from "../Pages/Notification/NotificationScreen";
import BookingScreen from "../Pages/Booking/BookingScreen";
import PromotionScreen from "../Pages/Promotion/PromotionScreen";

import FontAwesome from "react-native-vector-icons/FontAwesome"; // Bộ FontAwesome
import MaterialIcons from "react-native-vector-icons/MaterialIcons"; // Bộ MaterialIcons
import Ionicons from "react-native-vector-icons/Ionicons"; // Bộ Ionicons
import Feather from "react-native-vector-icons/Feather"; // Bộ Feather
import LoginScreen from "../Pages/Auth/LoginScreen";
import RegisterScreen from "../Pages/Auth/RegisterScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack cho phần Home
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
// Stack Profile
const AccountStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
          title: "Hồ sơ",
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: true,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
          title: "Chỉnh sửa hồ sơ",
        }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: true,
          tabBarVisible: false,
          title: "Cài đặt ", // Ẩn thanh tab dưới cùng
        }}
      />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{
          headerShown: true,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
          title: "Đổi mật khẩu",
        }}
      />
      <Stack.Screen
        name="RewardMember"
        component={RewardMember}
        options={{
          headerShown: true,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
          title: "Phần thưởng & Thành viên",
        }}
      />
      <Stack.Screen
        name="Points"
        component={Points}
        options={{
          headerShown: true,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
          title: "Điểm thưởng ",
        }}
      />
      <Stack.Screen
        name="PointsHistory"
        component={PointsHistory}
        options={{
          headerShown: true,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
          title: "Lịch sử điểm thưởng",
        }}
      />
    </Stack.Navigator>
  );
};

// Bottom Tab Navigator

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF0000",
        tabBarInactiveTintColor: "#888888",
        tabBarIconStyle: { size: 24 },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          title: "Room",
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "storefront" : "storefront-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="PromotionTab"
        component={PromotionScreen}
        options={{
          title: "Promotion",
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "bookmarks" : "bookmarks-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="BookingTab"
        component={BookingScreen}
        options={{
          title: "Booking",
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "medkit" : "medkit-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="NotificationTab"
        component={NotificationScreen}
        options={{
          title: "Notification",
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused
              ? "notifications"
              : "notifications-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="AccountTab"
        component={AccountStackNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "person" : "person-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />

    </Tab.Navigator>
  );
};

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Trạng thái đăng nhập

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
      {/* <MainNavigator /> */}
    </NavigationContainer>
  );
};

export default Navigation;
