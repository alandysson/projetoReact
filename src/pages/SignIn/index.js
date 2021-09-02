import React, {useContext, useState } from 'react';
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {AuthContext} from '../../contexts/auth';
import { 
  BtnEntrar, 
  BtnText, 
  Container, 
  ContainerInputs, 
  Input, 
  Link, 
  Logo 
} from './styles';

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [ password, setPassword] = useState();

  const { logar } = useContext(AuthContext);

  function Entrar(){
    logar(email, password)
  }
  return (
   <Container>
     <KeyboardAvoidingView 
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
     >
      <Logo 
        source={require('../../imgs/logo.png')}
      />
      <ContainerInputs>
        <Input 
          placeholder="Email"
          value={email}
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor="#fff"
          onChangeText={(text) => setEmail(text)}
        />
        <Input 
          placeholder="Senha"
          value={password}
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor="#fff"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </ContainerInputs>

      <BtnEntrar onPress={Entrar}>
        <BtnText>Entrar</BtnText>
      </BtnEntrar>

      <TouchableOpacity>
        <Link onPress={() => navigation.navigate('SignUp')}>
          Criar uma conta
        </Link>
      </TouchableOpacity>
     </KeyboardAvoidingView>
   </Container>
  );
}