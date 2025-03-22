import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const rewards = [
  { id: "1", title: "Giảm 15% cho mọi đặt phòng", points: 1000 },
  { id: "2", title: "Giảm 15% cho mọi đặt phòng", points: 1000 },
];

const PointsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Điểm: 2300</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Lịch sử dùng điểm")}>
          <Text style={styles.historyText}>Lịch sử</Text>
        </TouchableOpacity>
      </View>

      {/* Danh sách voucher */}
      <FlatList
        data={rewards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.rewardItem}>
            <Icon name="ticket-percent-outline" size={40} color="#007BFF" />
            <View style={styles.rewardTextContainer}>
              <Text style={styles.rewardTitle}>{item.title}</Text>
              <Text style={styles.rewardPoints}>{item.points} điểm</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  historyText: {
    fontSize: 16,
    color: "#007BFF",
  },
  rewardItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  rewardTextContainer: {
    marginLeft: 10,
  },
  rewardTitle: {
    fontSize: 16,
  },
  rewardPoints: {
    fontSize: 14,
    color: "#007BFF",
    fontWeight: "bold",
  },
});

export default PointsScreen;
