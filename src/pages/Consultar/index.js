import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';

import { AuthContext } from '../../contexts/auth';
import { format } from 'date-fns';
import firebase from '../../services/firebaseConnection';

import ListaConsulta from '../Consultar/ListaConsulta';

export default function Consultar() {
    const [ mesC, setMesC] = useState(null);
    let ano = format(new Date(), 'yyyy');
    const [calendario, setCalendario] = useState([
      {key: '01', nome: 'Janeiro'},
      {key: '02', nome: 'Fevereiro'},
      {key: '03', nome: 'Março'},
      {key: '04', nome: 'Abril'},
      {key: '05', nome: 'Maio'},
      {key: '06', nome: 'Junho'},
      {key: '07', nome: 'Julho'},
      {key: '08', nome: 'Agosto'},
      {key: '09', nome: 'Setembro'},
      {key: '10', nome: 'Outubro'},
      {key: '11', nome: 'Novembro'},
      {key: '12', nome: 'Dezembro'},
    ]);

    const [ saldo, setSaldo] = useState();
    const { user } = useContext(AuthContext);
    const uid = user && user.uid;

    const [list, setList] = useState([]);

    let renderMes = calendario.map((v, k) => {
      return <Picker.Item key={v.key} value={v.key} label={v.nome} />
    })

    async function consDados(){
      setSaldo('00')
      await firebase.database().ref('users')
      .child(uid).child(ano).child(mesC).once('value')
      .then((snapshot) => {
        let valor = snapshot.val().total;
        { valor === null ? setSaldo(0) : setSaldo(valor) }
      }).catch(() => alert('Nenhum gasto registrado nesse mês'))  
      
      await firebase.database().ref('historico')
      .child(uid).child(ano).child(mesC).orderByChild('data')
      .on('value', (snapshot) => {
        setList([]);
        
        snapshot.forEach((childItem) => {
          let lista = {
            key: childItem.key,
            tipo: childItem.val().tipo,
            valor: childItem.val().valor,
            data: childItem.val().data
          }
          setList(oldArray => [...oldArray, lista].reverse())
          console.log(list)
        })
      })
    }
  
    return (
      <View style={styles.container}>
          <Text style={{color:"#fff", fontSize: 22, marginTop: 75, marginBottom: 22}}>Qual mês deseja consultar?</Text>
          <Picker
            selectedValue={mesC}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setMesC(itemValue)
            }>
            {renderMes}            
          </Picker>
          
          <View style={styles.areaBtn}>
            <TouchableOpacity style={styles.btn} onPress={consDados}>
              <Text style={styles.txtBtn}>Consultar</Text>
            </TouchableOpacity>
          </View>

          <Text style={{color:"#fff", fontSize: 19, marginTop: 30, marginBottom: 22}}>No mês {mesC} de {ano} você gastou: R${saldo}</Text>
          <ScrollView style={styles.itens}>
            <FlatList 
              data={list}
              keyExtractor={(item) => item.key }
              renderItem={({item}) => (<ListaConsulta data={item} />)}
            />
          </ScrollView> 
          
      </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#000',
    alignItems: 'center',
  },

  picker:{
    display: 'flex',
    color: 'white',
    backgroundColor:'#312D2D',
    width: 290,
    borderRadius: 10
  },
  itens:{
    margin: 20
  },
  areaBtn:{
    width: 120,
    height: 40,
    backgroundColor: '#35C744',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 5,
  },
  txtBtn:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  }
})