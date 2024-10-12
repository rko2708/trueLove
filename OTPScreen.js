import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const OTPScreen = ({ navigation, route }) => {
  const [otp, setOtp] = useState('');
  const { phoneNumber } = route.params;

  const handleOTPSubmit = () => {
    // Here you'd typically verify the OTP with the backend.
    if (otp === '1234') { // Example OTP check
      navigation.navigate('Profile');
    } else {
      alert('Invalid OTP, try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP sent to {phoneNumber}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        placeholderTextColor="#cc8fba"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity style={styles.button} onPress={handleOTPSubmit}>
        <Text style={styles.buttonText}>Submit OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23101e',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#49223e',
    color: '#fff',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f629bc',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OTPScreen;
