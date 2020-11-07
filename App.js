import React from 'react';
import { StatusBar } from 'react-native';

//import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from "./screens/products/productsHome";
import Contact from "./screens/contact/contact";
import Account from "./screens/account/account";

const Tab = createMaterialTopTabNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    /* if (!this.state.isReady) {
      return <AppLoading />;
    } */

    return (
      <NavigationContainer>
        <StatusBar />
        <Tab.Navigator>
          <Tab.Screen name='Productos' component={Home} />
          <Tab.Screen name='Carrito' component={Contact} />
          <Tab.Screen name='Cuenta' component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
