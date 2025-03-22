import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  return (
    <View style={styles.container}>

      <View style={styles.settingCard}>
        <View style={styles.optionItem}>
          <Text style={styles.optionText}>Thông báo</Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={(value) => setIsNotificationsEnabled(value)}
          />
        </View>

        <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate("PrivacyPolicy")}> 
          <Text style={styles.optionText}>Chính sách quyền riêng tư</Text>
          <Ionicons name="chevron-forward" size={20} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate("TermsConditions")}> 
          <Text style={styles.optionText}>Điều khoản & Điều kiện</Text>
          <Ionicons name="chevron-forward" size={20} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Tìm hiểu thêm về ứng dụng</Text>
          <Ionicons name="chevron-forward" size={20} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Hỗ trợ</Text>
          <Ionicons name="chevron-forward" size={20} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Đánh giá ứng dụng</Text>
          <Ionicons name="chevron-forward" size={20} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.optionItem} 
            onPress={() => navigation.navigate("Đổi mật khẩu")}> 
          <Text style={styles.optionText}>Đổi mật khẩu</Text>
          <Ionicons name="chevron-forward" size={20} color="#555" />
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  settingCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    marginBottom: 15,
    borderBottomColor: "#E0E0E0",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
});

export default SettingsScreen;
