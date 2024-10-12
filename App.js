import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import OTPScreen from './OTPScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen'; // New Screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
