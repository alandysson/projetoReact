import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { BtnRegistrar, BtnText, Container, ContainerInput, Input } from './styles';

export default function SignUp() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { adicionar } = useContext(AuthContext);

  function criarAcc(){
    adicionar(email, password, nome)
  }

  return (
   <Container>
     <KeyboardAvoidingView style={{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
      }}
     >
      <ContainerInput>
        <Input 
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor="#fff"
          onChangeText={(text) => setNome(text)}
        />
        <Input 
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor="#fff"
          onChangeText={(text) => setEmail(text)}
        />
        <Input 
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </ContainerInput>
      <BtnRegistrar onPress={criarAcc}>
        <BtnText>Cadastrar</BtnText>
      </BtnRegistrar>
     </KeyboardAvoidingView>
   </Container>
  );
}