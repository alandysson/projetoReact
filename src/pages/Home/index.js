import React, {useContext, useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { format } from 'date-fns';
import firebase from '../../services/firebaseConnection';

import {AuthContext} from '../../contexts/auth';
import Lista from '../Lista';

export default function Home() {

  const [ saldo, setSaldo] = useState();
  const [ data, setData ] = useState();
  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  const [list, setList] = useState([]);

  useEffect(() => {
    async function carregarSaldo(){
      let ano = format(new Date(), 'yyyy');
      let mes = format(new Date(), 'MM')
      await firebase.database().ref('users').child(uid).child(ano).child(mes).on('value', (snapshot) => {
        if(snapshot.val().total === null){
          alert('erro')
        }else{
          setSaldo(snapshot.val().total);
          console.log('sucesso')
        }
        setData(format(new Date(), 'MM / yyyy'));
      });

      await firebase.database().ref('historico')
      .child(uid).child(ano).child(mes).orderByChild('data')
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
        })
      })
    }
    carregarSaldo();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.principal}>
        <Text style={{color: "white", fontSize: 30, fontStyle: "italic"}}>
          {user && user.nome }
        </Text>
        <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>- R${saldo}</Text>
      </View>
      <Text style={styles.data}>{data}</Text>

      <FlatList 
          data={list}
          keyExtractor={(item) => item.key }
          renderItem={({item}) => (<Lista data={item} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black',
    flex: 1,
  },
  principal:{
    justifyContent: 'center',
    alignItems: 'center',
    height: "23%",
    backgroundColor: '#35C744',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  data:{
    fontSize: 27, 
    color: '#C0B4B4',
    textAlign: 'center',
    marginTop: 10, 
    marginBottom: 20
  },
})