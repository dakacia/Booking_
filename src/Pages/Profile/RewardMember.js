import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
const RewardMember = () => {
  
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.tierContainer}>
        <Icon name="star-outline" size={80} color="#D3D3D3" />
        <Text style={styles.tierText}>Bạc</Text>
      </View>

      {/* Thanh tiến trình */}
      <View style={{ height: 20, justifyContent: "center" }}>
            <ProgressBar progress={180 / 300} color="#007BFF" style={styles.progressBar} />
      </View>
      <Text style={styles.progressText}>180/300$</Text>

      {/* Quyền lợi thành viên */}
      <View style={styles.benefitsContainer}>
        <View style={styles.benefitItem}>
          <Icon name="water-percent" size={24} color="#007BFF" />
          <Text style={styles.benefitText}>Giảm 10%</Text>
        </View>
        <View style={styles.benefitItem}>
          <Icon name="food" size={24} color="#007BFF" />
          <Text style={styles.benefitText}>Miễn phí bữa sáng</Text>
        </View>
      </View>

      {/* Điểm thưởng */}
      <TouchableOpacity 
      style={styles.pointsContainer}
      onPress={() => navigation.navigate("Điểm thưởng")}>
        <Text style={styles.pointsTitle}>Điểm: 2300</Text>
        <Text style={styles.pointsSubtitle}>432 points sẽ hết hạn vào 14/3/2025</Text>
        <Ionicons name="chevron-forward" size={20} color="#555" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tierContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  tierText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D3D3D3",
    marginTop: 5,
  },
  progressBar: {
    height: 8,
    borderRadius: 5,
    marginVertical: 10,
  },
  progressText: {
    textAlign: "center",
    fontSize: 14,
    color: "#555",
  },
  benefitsContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    marginVertical: 15,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  benefitText: {
    fontSize: 16,
    marginLeft: 10,
  },
  pointsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
  },
  pointsTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pointsSubtitle: {
    fontSize: 14,
    color: "#888",
  },
});

export default RewardMember;
