import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import HostScreen from '../screens/HostScreen'
import AudienceScreen from '../screens/AudienceScreen'


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
   <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} headerMode='none' name='Home' component={HomeScreen}  />
        <Stack.Screen options={{headerShown: false}}  name='Audience' component={AudienceScreen}  />
        <Stack.Screen options={{headerShown: false}}  name='Host' component={HostScreen}  />
   </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})