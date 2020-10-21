import React, {useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {AuthContext} from '../../contexts/auth';

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [ password, setPassword] = useState();

  const { logar } = useContext(AuthContext);

  function Entrar(){
    logar(email, password)
  }
  return (
   <View style={{backgroundColor: 'black', flex: 1}}>
     <KeyboardAvoidingView style={styles.container}>
      <Image 
        source={require('../../imgs/logo.png')}
        style={styles.logo}
      />
      <View style={styles.areaInput}>
        <TextInput 
          placeholder="Email"
          value={email}
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor="#fff"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput 
          placeholder="Senha"
          value={password}
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor="#fff"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity onPress={Entrar} style={styles.areaBtn}>
        <Text style={styles.textBtn}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Criar uma conta
        </Text>
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
    width: 120,
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