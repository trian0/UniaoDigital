import React, {useState} from 'react';
import {Text, View, StyleSheet, KeyboardAvoidingView, 
ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const imgbg = '../../assets/bg1.png'

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground source={require(imgbg)} style={styles.container}>

      <TextInput
        style={styles.input}
        value={nome}
        placeholder="Nome Completo"
        />
        <TextInput 
        style={styles.input}
        placeholder="Senha"
        value={senha}
        />

      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: '100%',
  },
  background:{
    flex: 1,
    width: '100%',
  },
  input:{
    backgroundColor: '#DCDCDC',
    borderRadius: 30,
    margin: 15,
    padding:10,
    color:'#000',
    fontSize: 20,
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 15,
    padding:10,
    backgroundColor: '#ADD8E6',
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF',
  },
  link:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 10,
    padding:10,
  },
  linkText:{
    fontSize: 15,
    color: '#FFF',
  }
})
