import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Image
        style={styles.profileImage}
        source={{ uri: 'https://cdn.usegalileo.ai/stability/603e96b5-3681-4fc1-ba3e-30d2b7b255a0.png' }}
      />
      <Text style={styles.profileName}>Sophia</Text>
      <Text style={styles.profileLocation}>San Francisco</Text>

      <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileLocation: {
    color: '#cc8fba',
    fontSize: 16,
  },
  editButton: {
    backgroundColor: '#f629bc',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
