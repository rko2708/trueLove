import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Request access to photo library
    let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted === false) {
      alert("Permission to access media library is required!");
      return;
    }

    // Open image picker
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setImage(pickerResult.uri);
    }
  };

  const handleSaveProfile = () => {
    // You can handle profile save logic here (e.g., saving to backend)
    alert('Profile Updated');
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      
      <TouchableOpacity onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.profileImage} />
        ) : (
          <View style={styles.profilePlaceholder}>
            <Text style={styles.profilePlaceholderText}>Pick an image</Text>
          </View>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Enter name"
        placeholderTextColor="#cc8fba"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
        <Text style={styles.buttonText}>Save Profile</Text>
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
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#49223e',
    color: '#fff',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f629bc',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  profilePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#49223e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePlaceholderText: {
    color: '#cc8fba',
    textAlign: 'center',
  },
});

export default EditProfileScreen;
