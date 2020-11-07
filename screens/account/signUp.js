import React, { useState, useEffect } from "react";
import { Text, View } from 'react-native';
import firebaseService from "../../services/firebase";

import { Button, Container, Form, Item, Label, Input } from 'native-base';

import styles from "./stylesAccount";

export default function SignUp({userState}) {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ pass, setPass ] = useState('')

  const onPressSignUp = async() => {
    //email == '' ? console.log('nada') : console.log('algo')
    try {
      await firebaseService.createUser(name, email, pass).then(() => {
        userState();
      })
      console.log('se ha creado la cuenta, su número es ', phone )
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Container style={styles.container}>
      <View >
        <Form>
          <Item floatingLabel>
            <Label>Nombre</Label>
            <Input onChangeText={(val) => setName(val)}/>
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input onChangeText={(val) => setEmail(val)}/>
          </Item>
          <Item floatingLabel>
            <Label>Número de celular</Label>
            <Input onChangeText={(val) => setPhone(val)}/>
          </Item>
          <Item floatingLabel>
            <Label>Contraseña</Label>
            <Input onChangeText={(val) => setPass(val)}/>
          </Item>
        </Form>
      </View>
      <View style={styles.bottom}>
        <Button full warning style={styles.button} onPress={onPressSignUp} >
          <Text style={{ color: 'white', fontSize: 20 }}>Crear cuenta</Text>
        </Button>
      </View>
    </Container>
  );
}