import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ListaConsulta({data}) {
 return (
   <View style={styles.container}>
       <View style={styles.areaList}>
           <Text style={styles.txtList}>{data.tipo}</Text>
           <Text style={styles.precoList}>- R${data.valor.toFixed(2)}</Text>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    areaList:{
        width: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
    },
    txtList:{
        paddingBottom: 8,
        fontSize: 20,
        color: '#454747',
        alignItems: 'center'
    },
    precoList:{
        fontSize: 20,
        color: '#c62c36',
        alignItems: 'center'
    }

})