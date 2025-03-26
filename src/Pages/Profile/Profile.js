import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation,useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Profile = () => {
  const navigation = useNavigation();

  // Dữ liệu người dùng
  const [userData, setUserData] = useState({
    name: "John Smith",
    email: "johnsmith@gmail.com",
    phone: "+225 698698966",
    avatar: require("../../../assets/images/profile.png"),
  });

  useFocusEffect(
    useCallback(() => {
      const fetchUserData = async () => {
        try {
          const storedData = await AsyncStorage.getItem("userProfile");
          console.log("Dữ liệu lưu trữ:", storedData);
  
          if (storedData) {
            const parsedData = JSON.parse(storedData);
            
            setUserData({
              name: parsedData.name || "John Smith",
              email: parsedData.email || "johnsmith@gmail.com",
              phone: parsedData.phone || "+225 698698966",
              avatar: parsedData.avatar 
                ? { uri: parsedData.avatar } 
                : require("../../../assets/images/profile.png"),
            });
          }
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu người dùng:", error);
        }
      };
  
      fetchUserData();
    }, [])
  );
  
  
  return (
    <View style={styles.container}>
      {/* Ảnh nền */}
      <View style={styles.topContainer}>
      <Image source={userData.avatar} style={styles.profileImage} />
      </View>

      {/* Card chứa thông tin cá nhân */}
      <View style={styles.profileCard}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate
            ("Chỉnh sửa hồ sơ", 
            { userData})}
        >
          <Ionicons name="pencil" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.userName}>{userData.name}</Text>
        <Text style={styles.userEmail}>{userData.email}</Text>
        <Text style={styles.userPhone}>{userData.phone}</Text>
      </View>

      {/* Các tùy chọn bên dưới */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity 
          style={styles.optionItem}
          onPress={() => navigation.navigate("Cài đặt")} >
          <Text style={styles.optionText}>Cài đặt</Text>
          <Ionicons name="chevron-forward" size={20} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.optionItem}
          onPress={() => navigation.navigate("Phần thưởng & Thành viên")}>
          <Text style={styles.optionText}>Phần thưởng và Thành viên</Text>
          <Ionicons name="chevron-forward" size={20} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  topContainer: {
    height: "50%",
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  profileCard: {
    position: "absolute",
    top: "40%", // Đẩy Card lên trên ảnh nền
    left: "5%",
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  editButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#00C853",
    padding: 8,
    borderRadius: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  userEmail: {
    fontSize: 14,
    color: "#555",
  },
  userPhone: {
    fontSize: 14,
    color: "#555",
  },
  optionsContainer: {
    marginTop: 100,
    padding: 20,
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
});

export default Profile;
