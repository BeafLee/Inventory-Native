import React, { useState, useEffect } from "react";
import { Text, View } from 'react-native';
import firebaseService from "../../services/firebase";

import { Button, Container, Form, Item, Label, Input } from 'native-base';

import styles from "./stylesAccount";

export default function Login({navigation, userState}) {

  const [ email, setEmail ] = useState('')
  const [ pass, setPass ] = useState('')

  const onPressLogin = async() => {
    try {
      await firebaseService.login(email, pass).then(()=> {
        userState();
      })

    } catch (error) {
      alert(error)
    }
  }

  return (
    <Container style={{justifyContent: 'space-between'}}>
      <View>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input onChangeText={(val) => setEmail(val)} />
          </Item>
          <Item floatingLabel>
            <Label>Contraseña</Label>
            <Input onChangeText={(val) => setPass(val)} />
          </Item>
        </Form>
      </View>
      <View style={styles.bottom}>
        <Button block success style={styles.button} onPress={onPressLogin}>
          <Text style={{ color: 'white', fontSize: 20 }}>Iniciar sesión</Text>
        </Button>
      </View>
    </Container>
  );
}