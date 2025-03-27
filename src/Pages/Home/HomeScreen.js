import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PhoneInput from "react-native-phone-number-input";

const PhoneNumberInput = ({ phone, setPhone }) => {
  const phoneInputRef = useRef(null);
  const [countryCode, setCountryCode] = useState("+225");

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Số điện thoại</Text>
      <View style={styles.inputText}>
        {/* Nhấn vào icon điện thoại sẽ focus vào input */}
        <TouchableOpacity onPress={() => phoneInputRef.current?.focus()}>
          <Ionicons name="phone-portrait-outline" size={20} color="#0090FF" />
        </TouchableOpacity>

        <View style={styles.inputGroup}>
          {/* Nhấn vào đầu số để mở danh sách chọn quốc gia */}
          <TouchableOpacity
            style={styles.prefixContainer}
            onPress={() => phoneInputRef.current?.focus()}
          >
            <Text style={styles.prefixText}>{countryCode}</Text>
            <Ionicons
              name="chevron-down-outline"
              size={20}
              color="#00F598"
              style={styles.chevronIcon}
            />
          </TouchableOpacity>

          <PhoneInput
            ref={phoneInputRef}
            defaultValue={phone}
            defaultCode="CI" // Mặc định +225 (Côte d'Ivoire)
            layout="first"
            onChangeFormattedText={(text) => setPhone(text)}
            onChangeCountry={(country) => setCountryCode(`+${country.callingCode}`)}
            containerStyle={styles.phoneContainer}
            textContainerStyle={styles.textContainer}
            flagButtonStyle={{ display: "none" }} // Ẩn cờ quốc gia
            renderDropdownImage={null} // Ẩn biểu tượng dropdown của cờ
            textInputProps={{
              placeholder: "Số điện thoại",
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  inputText: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  inputGroup: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  prefixContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  prefixText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0090FF",
  },
  chevronIcon: {
    marginLeft: 5,
  },
  phoneContainer: {
    flex: 1,
    height: 50,
  },
  textContainer: {
    borderRadius: 8,
    paddingVertical: 0,
  },
});

export default PhoneNumberInput;
