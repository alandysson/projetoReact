import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { adicionar } = useContext(AuthContext);

  function criarAcc(){
    adicionar(email, password, nome)
  }

  return (
   <View style={{backgroundColor: 'black', flex: 1}}>
     <KeyboardAvoidingView style={styles.container}>
      <View style={styles.areaInput}>
        <TextInput 
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor="#fff"
          onChangeText={(text) => setNome(text)}
        />
        <TextInput 
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor="#fff"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput 
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.areaBtn} onPress={criarAcc}>
        <Text style={styles.textBtn}>Cadastrar</Text>
      </TouchableOpacity>
     </KeyboardAvoidingView>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 120,
    height: 120,
    marginBottom: 30
  },
  areaInput:{
    flexDirection: 'column',
    width: '90%'
  },
  input:{
    backgroundColor: "#312D2D",
    height: 47,
    justifyContent: 'center',
    marginBottom: 10,
    fontSize: 18,
    padding: 10,
    borderRadius: 5,
    color: 'white'
  },
  areaBtn:{
    backgroundColor: "#35C744",
    height: 47,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 12
  },
  textBtn:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22
  },
  link:{
    color: '#6E6868',
    fontSize: 16,
    marginTop: 2
  }
})