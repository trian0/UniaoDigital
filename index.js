import React, {useState} from 'react';
import {Text, View, StyleSheet, KeyboardAvoidingView, 
ImageBackground, TextInput, TouchableOpacity, StatusBar} from 'react-native';


const imgbg = '../../assets/bg1.png'

export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function Logar (){
    alert(email + senha)
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground source={require(imgbg)} style={styles.container}>
        
        <TextInput
        style={styles.input}
        value={email}
        onChangeText={ (email) => setEmail(email) }
        placeholder="Email"
        />
        <TextInput 
        style={styles.input}
        value={senha}
        onChangeText={ (senha) => setSenha(senha) }
        placeholder="Senha"
        secureTextEntry={true}
        />

        <TouchableOpacity 
        style={styles.button}
        onPress={Logar}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.link}
        onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.linkText}>Não possui cadastro? CADASTRE-SE!</Text>
        </TouchableOpacity>

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
