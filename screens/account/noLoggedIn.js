import React, { useState, useEffect } from "react";
import { Text, View } from 'react-native';
import firebaseService from "../../services/firebase";

import { Button, Container } from 'native-base';

import styles from "./stylesAccount";

export default function NoLoggedIn({ navigation }) {

  return (
    <Container style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Usted aún no ha iniciado sesión</Text>
        <Text style={styles.text}>Si ya tiene una cuenta puede logearse en el botón de abajo o crearse una cuenta si aún no tiene</Text>

      </View>
      <View style={styles.bottom}>
        <Button block success style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: 'white', fontSize: 20 }}>Inicia sesión</Text>
        </Button>
        <Button full warning style={styles.button} onPress={() => navigation.navigate('SignUp')}>
          <Text style={{ color: 'white', fontSize: 20 }}>Registrate</Text>
        </Button>
      </View>
    </Container>
  );
}
