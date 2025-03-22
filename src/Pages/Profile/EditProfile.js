import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PhoneInput from "react-native-phone-input";


const EditProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userData, onSave } = route.params;

  // State để lưu dữ liệu chỉnh sửa
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.phone);
  const [avatar, setAvatar] = useState(userData.avatar);

  // Xử lý chọn ảnh
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log("Image URI:", result.assets[0].uri);

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  // Xử lý lưu thông tin
  // const handleSave = async () => {
  //   const updatedData = { name, email, phone, avatar };
  //   await AsyncStorage.setItem("userProfile", JSON.stringify(updatedData));
  //   navigation.goBack();
  // };

  const handleSave = async () => {
    const updatedData = { name, email, phone, avatar };
    await AsyncStorage.setItem("userProfile", JSON.stringify(updatedData));
    navigation.navigate("Profile", { updated: true }); // Truyền tham số để báo màn hình trước cập nhật
  };
  

  return (
    <View style={styles.container}>
      

      {/* Avatar */}
      <TouchableOpacity style={styles.avatarContainer} onPress={pickImage}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <Ionicons name="camera" size={24} color="white" style={styles.cameraIcon} />
      </TouchableOpacity>

      {/* Form nhập thông tin */}
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Tên" />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />
      <PhoneInput 
            initialCountry="vn" 
            value={phone} 
            onChangePhoneNumber={setPhone} 
            />

      {/* Nút cập nhật */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Cập nhật</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
  },
  avatarContainer: {
    alignSelf: "center",
    position: "relative",
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#00C853",
    padding: 5,
    borderRadius: 20,
  },
  input: {
    backgroundColor: "#F1F1F1",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "#00C853",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EditProfile;
