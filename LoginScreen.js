import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    // Here, you would typically send the phone number to the server and trigger OTP sending.
    navigation.navigate('OTP', { phoneNumber });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TrueLove</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        placeholderTextColor="#cc8fba"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
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

export default LoginScreen;
