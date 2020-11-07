import React, { useState, useEffect } from "react";
import { Text, View } from 'react-native';
import firebaseService from "../../services/firebase";

import { Button, Container} from 'native-base';

import styles from "./stylesAccount";

export default function LoggedIn(props) {

  const onPressSignOut = async() => {
    try {
      await firebaseService.SignOut();
      props.userState();
    } catch (error) {
      alert(error)
    }
  }
  //console.log(props.user)

  return (
    <Container style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Bienvenido {props.user.displayName}!!!</Text>
  <Text style={styles.text} >Email: {props.user.email}</Text>
      </View>
      <View style={styles.bottom}>
        <Button block danger style={styles.button} onPress={onPressSignOut}>
          <Text style={{ color: 'white' }}>Cerrar sesión</Text>
        </Button>
      </View>
    </Container>
  );
}