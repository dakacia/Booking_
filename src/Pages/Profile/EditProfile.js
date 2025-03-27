import React, { useState, useLayoutEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PhoneInput from "react-native-phone-number-input";
import { LinearGradient } from "expo-linear-gradient"; // Import from expo-linear-gradient
import { parsePhoneNumberFromString } from "libphonenumber-js"; // Import thư viện để phân tích số điện thoại

const EditProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userData } = route.params || { userData: { name: "", email: "", phone: "", avatar: "" } }; // Fallback if userData is undefined
  console.log(">>> check userData", userData);

  // State để lưu dữ liệu chỉnh sửa
  const [name, setName] = useState(userData.name || "John Smith");
  const [email, setEmail] = useState(userData.email || "johnsmith@gmail.com");
  const [phone, setPhone] = useState(userData.phone || "+225 698689866");
  const [avatar, setAvatar] = useState(userData.avatar || "https://via.placeholder.com/150"); // Placeholder image

  const phoneInputRef = useRef(null);
  const tmp = phone;
  const Sphone = parsePhoneNumberFromString(tmp);
  
  // Set header options
  useLayoutEffect(() => {

    // Hide tab bar
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: "flex" } });
    };
  }, [navigation]);

  // Xử lý chọn ảnh
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
      const newAvatar = result.assets[0].uri;
      await handleSaveAvatar(newAvatar);
    }
  };

  const handleSaveAvatar = async (newAvatar) => {
    const updatedData = { name, email, phone, avatar: newAvatar };
    await AsyncStorage.setItem("userProfile", JSON.stringify(updatedData));
  };

  const handleSave = async () => {
    const updatedData = { name, email, phone, avatar };
    await AsyncStorage.setItem("userProfile", JSON.stringify(updatedData));
    navigation.navigate("Profile", { updated: true });
  };

  return (
    <View style={styles.container}>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <TouchableOpacity style={styles.cameraIconContainer} onPress={pickImage}>
          <Ionicons name="camera-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Form nhập thông tin */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Tên đầy đủ</Text>
        <View style={styles.inputText}>
          <Ionicons name="person-outline" size={20} color="#0090FF" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Tên"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <View style={styles.inputText}>
          <Ionicons name="mail-outline" size={20} color="#0090FF" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="Email"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Số điện thoại</Text>
        <View style={styles.inputText}>
          <Ionicons name="phone-portrait-outline" size={20} color="#0090FF" style={styles.icon} />
          <PhoneInput
            // ref={phoneInputRef}
            // defaultValue={phone}
            defaultValue = {Sphone && Sphone.nationalNumber ? Sphone.nationalNumber : ""}
            defaultCode={Sphone && Sphone.country ? Sphone.country : ""}
            onChangeFormattedText={(text) => setPhone(text)}
            containerStyle={styles.phoneContainer}
            textContainerStyle={styles.textContainer}
          />
        </View>
      </View>

      {/* Nút cập nhật */}
      <TouchableOpacity onPress={handleSave}>
        <LinearGradient
          colors={["#00C4B4", "#00F598"]} // Gradient colors matching the UI
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.saveButton}
        >
          <Text style={styles.saveText}>Cập nhật</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // White background as in the UI
    padding: 20,
  },
  avatarContainer: {
    alignSelf: "center",
    position: "relative",
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#00C853", // Green background for camera icon
    borderRadius: 20,
    padding: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  inputText: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  phoneContainer: {
    flex: 1,
    height: 40,
    backgroundColor: "transparent",
  },
  textContainer: {
    backgroundColor: "transparent",
    paddingVertical: 0,
  },
  saveButton: {
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 30,
  },
  saveText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EditProfile;