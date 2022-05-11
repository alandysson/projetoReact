import React, {useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, Alert } from 'react-native';
import { format } from 'date-fns';
import firebase from '../../services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

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
        let hist =  firebase.database().ref('historico').child(uid).child(ano).child(mes);       

        await hist.child(tipo).set({
            tipo: tipo,
            valor: parseFloat(valor),
            data: format(new Date(), 'dd, MM, yyyy')
        })

        let user = firebase.database().ref('users').child(uid);

        user.child(ano).child(mes).set({
            total : parseFloat(valor),
        })

        await user.child(ano).child(mes).once('value').then((snapshot) => {
            let gastos = parseFloat(snapshot.val().total);

            valor >=0 ? gastos += parseFloat(valor) : gastos -= parseFloat(valor)

            user.child(ano).child(mes).child('total').set(gastos/2);
        })

        Keyboard.dismiss();
        navigation.navigate('Inicio');
        setValor('');
        setTipo('');
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={{borderBottomColor: "#58BC29", borderWidth: 1, marginTop: 5}}>
                <Text style={{fontSize: 20, color:'white', marginBottom: 5, margin: 10}}>Registro de gastos</Text>
            </View>
            <View style={styles.areaInput}>
                <TextInput 
                    placeholder="Com o que você gastou?"
                    placeholderTextColor="#fff"
                    style={styles.input}
                    onChangeText={(text) => setTipo(text)}
                    value={tipo}
                />
                <TextInput 
                    placeholder="R$"
                    placeholderTextColor="#fff"
                    keyboardType="numeric"
                    style={styles.input}
                    onChangeText={(number) => setValor(number)}
                    value={valor}
                />
                <View style={styles.areaBtn}>
                    <TouchableOpacity style={styles.btn} onPress={verificar}>
                        <Text style={styles.txtBtn}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
        
        );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
    },
    areaInput:{
        flex:1,
        alignItems: 'center',
        marginTop: 100,
    },
    input:{
        backgroundColor: "#312D2D",
        width: '95%',
        height: 55,
        justifyContent: 'center',
        marginBottom: 10,
        fontSize: 18,
        padding: 15,
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
    txtBtn:{
        fontSize: 22,
        color: '#fff',
        fontWeight: "700"
    }
})