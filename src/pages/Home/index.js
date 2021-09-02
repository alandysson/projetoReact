import React, {useContext, useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { format } from 'date-fns';
import firebase from '../../services/firebaseConnection';
import { Container, Banner, TextDate, TextBanner } from "./styles.js"
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
        setSaldo(snapshot.val().total);
        setData(format(new Date(), 'MM / yyyy'))
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
    <Container>
      <Banner>
        <TextBanner styleFont>
          {user && user.nome }
        </TextBanner>
        <TextBanner fontWidth textWeigth>- R${saldo}</TextBanner>
      </Banner>
      <TextDate>{data}</TextDate>

      <FlatList 
        data={list}
        keyExtractor={(item) => item.key }
        renderItem={({item}) => (<Lista data={item} />)}
      />
    </Container>
  );
}