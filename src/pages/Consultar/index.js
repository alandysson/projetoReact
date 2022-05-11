import React, { useState, useContext } from 'react';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Title, Container, ContainerButton, PickerStyled, Descricao, TextBtn } from "./styles.js"
import { AuthContext } from '../../contexts/auth';
import { format } from 'date-fns';
import firebase from '../../services/firebaseConnection';

import ListaConsulta from '../Consultar/ListaConsulta';

export default function Consultar() {
  const [mes, setMes] = useState(null);
  let ano = format(new Date(), 'yyyy');
  const calendario = [
    { key: '01', nome: 'Janeiro' },
    { key: '02', nome: 'Fevereiro' },
    { key: '03', nome: 'Março' },
    { key: '04', nome: 'Abril' },
    { key: '05', nome: 'Maio' },
    { key: '06', nome: 'Junho' },
    { key: '07', nome: 'Julho' },
    { key: '08', nome: 'Agosto' },
    { key: '09', nome: 'Setembro' },
    { key: '10', nome: 'Outubro' },
    { key: '11', nome: 'Novembro' },
    { key: '12', nome: 'Dezembro' },
  ];

  const [saldo, setSaldo] = useState();
  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  const [list, setList] = useState([]);

  let renderMes = calendario.map((v, k) => {
    return <Picker.Item key={v.key} value={v.key} label={v.nome} />
  })

  async function consultarDados() {
    setSaldo('00')
    await firebase.database().ref('users')
      .child(uid).child(ano).child(mes).once('value')
      .then((snapshot) => {
        setSaldo(snapshot.val().total);
      })
      .catch(() => alert('Nenhum gasto registrado nesse mês'))

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

  return (
    <Container>
      <Title>Qual mês deseja consultar?</Title>
      <PickerStyled
        selectedValue={mes}
        onValueChange={(itemValue, itemIndex) =>
          setMes(itemValue)
        }>
        {renderMes}
      </PickerStyled>

      <ContainerButton>
        <TouchableOpacity onPress={consultarDados}>
          <TextBtn>Consultar</TextBtn>
        </TouchableOpacity>
      </ContainerButton>

      <Descricao>
        No mês {mes} de {ano} você gastou: R${saldo}
      </Descricao>
      <ScrollView style={{ margin: 20 }}>
        <FlatList
          data={list}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (<ListaConsulta data={item} />)}
        />
      </ScrollView>
    </Container>
  );
}