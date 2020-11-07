import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import firebaseService from "../../services/firebase";

import { Button, Container, Content } from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import styles from "./stylesAccount";

import NoLoggedIn from "./noLoggedIn";
import LoggedIn from "./loggedIn";
import Login from "./login";
import SignUp from "./signUp";
import { color } from "react-native-reanimated";

const Stack = createStackNavigator();

export default function Account({ navigation }) {

  const [user, setUser] = useState('')

  useEffect(() => {
    navigation.addListener('focus', () => {
      userState();
    });
  }, [navigation])

  const userState = () => {
    const userdata = firebaseService.getUser()
    setUser(userdata);
    //console.log(userdata);
  }

  if (user !== null) {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='LoggedIn'>
          {props => <LoggedIn {...props} user={user} userState={userState} />}
        </Stack.Screen>
      </Stack.Navigator>
    )
  } else {
    return (
      <Stack.Navigator mode='card'>
        <Stack.Screen options={{ headerShown: false }} name='NoLoggedIn' component={NoLoggedIn} />

        <Stack.Screen
          options={{
            title: 'Ingresa a tu cuenta',
            headerStyle: {
              backgroundColor: '#4EBD00',
            },
            headerTintColor: 'white',
          }} name='Login'>
            {props => <Login {...props} userState={userState} /> }
          </Stack.Screen>

        <Stack.Screen
          options={{
            title: 'Registrate',
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerTintColor: 'white',
          }} name='SignUp'>
            {props => <SignUp {...props} userState={userState} />}
          </Stack.Screen>
      </Stack.Navigator>
    )
  }
}

