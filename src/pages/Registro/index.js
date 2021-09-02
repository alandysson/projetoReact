import React, {useState, useContext } from 'react';
import {
    View,
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Keyboard, 
  Alert } from 'react-native';
import { format } from 'date-fns';
import firebase from '../../services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { BtnText, ContainerButtons, ContainerInputs, Input, TopMenu, TopMenuText } from './styles';

export default function Registro() {
  const navigation = useNavigation();
  const [ tipo, setTipo ] = useState(null);
  const [ valor, setValor ] = useState();
  const { user: userr} = useContext(AuthContext);
    
  function verificar(){
      Keyboard.dismiss();

      if(isNaN(parseFloat(valor)) || tipo === '' ){
          alert('Preencha os campos');
          return;
      }

      Alert.alert(
          'Confirmar dados',
          `Tipo: ${tipo} - Valor: ${parseFloat(valor)}`,
          [
              {
                  text: 'Cancelar',
                  style: 'cancel'
              },
              {
                  text: 'Continuar',
                  onPress: () => registrar()
              }
          ]
      )
    }

    async function registrar(){
        let uid = userr.uid;
        let ano = format(new Date(), 'yyyy');
        let mes = format(new Date(), 'MM')
        let usuario =  firebase.database().ref('historico').child(uid).child(ano).child(mes);       

        await usuario.child(tipo).set({
            tipo: tipo,
            valor: parseFloat(valor),
            data: format(new Date(), 'dd, MM, yyyy')
        })

        let user = firebase.database().ref('users').child(uid);
        await user.child(ano).child(mes).once('value').then((snapshot) => {
            let gastos = parseFloat(snapshot.val().total);

            valor >=0 ? gastos += parseFloat(valor) : gastos -= parseFloat(valor)

            user.child(ano).child(mes).child('total').set(gastos);
        })

        Keyboard.dismiss();
        navigation.navigate('Inicio');
        setValor('');
        setTipo('');
    }

    return (
        <KeyboardAvoidingView 
          style={{flex: 1, backgroundColor: '#000'}}
        >
            <TopMenu>
                <TopMenuText>Registro de gastos</TopMenuText>
            </TopMenu>
            <ContainerInputs>
                <Input 
                    placeholder="Com o que você gastou?"
                    placeholderTextColor="#fff"
                    onChangeText={(text) => setTipo(text)}
                    value={tipo}
                />
                <Input 
                    placeholder="R$"
                    placeholderTextColor="#fff"
                    keyboardType="numeric"
                    onChangeText={(number) => setValor(number)}
                    value={valor}
                />
                <ContainerButtons>
                    <TouchableOpacity onPress={verificar}>
                        <BtnText>Registrar</BtnText>
                    </TouchableOpacity>
                </ContainerButtons>
            </ContainerInputs>
        </KeyboardAvoidingView>
        );
}