import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Sử dụng icon cho nút quay lại
import LinearGradient from 'react-native-linear-gradient'; // Sử dụng gradient cho nút

const BookingDetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chi tiết đặt phòng</Text>
      </View>

      {/* Thông tin đặt phòng */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Thông tin phòng</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Đặt phòng</Text>
          <Text style={styles.value}>23 - 7 - 2019, 10:00 AM</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Trả phòng</Text>
          <Text style={styles.value}>25 - 7 - 2019, 10:00 AM</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Người lớn</Text>
          <Text style={styles.value}>2</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Trẻ con</Text>
          <Text style={styles.value}>2</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Số phòng</Text>
          <Text style={styles.value}>1</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Giá</Text>
          <Text style={styles.value}>$125</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Thuế</Text>
          <Text style={styles.value}>$20</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.labelBold}>Tổng cộng</Text>
          <Text style={styles.valueBold}>$145</Text>
        </View>
      </View>

      {/* Thông tin đồ ăn */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Thông tin đồ ăn</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Gà Tây</Text>
          <Text style={styles.value}>$10</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Sandwich</Text>
          <Text style={styles.value}>$5</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.labelBold}>Tổng</Text>
          <Text style={styles.valueBold}>$15</Text>
        </View>
      </View>

      {/* Phí dịch vụ và tổng */}
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Phí dịch vụ</Text>
          <Text style={styles.value}>$2</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.labelBold}>TỔNG</Text>
          <Text style={styles.valueBold}>$17</Text>
        </View>
      </View>

      {/* Nút Đặt lại */}
      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={['#00C4B4', '#2196F3']}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>Đặt lại</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  labelBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  valueBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    marginTop: 20,
    borderRadius: 25,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingDetailScreen;