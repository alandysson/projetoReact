import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Lista({data}) {
 return (
   <View style={styles.areaView}>
        <Text style={styles.dataList}>{data.data}</Text>
       <View style={styles.areaTxt}>
           <Text style={styles.textList}>{data.tipo}</Text>
           <Text style={styles.precoList}>- R${data.valor.toFixed(2)}</Text>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    areaView:{
        flex: 1,
        justifyContent: 'center',
    },
    areaTxt:{
        flex: 1,
        backgroundColor: 'white',
        width: "85%",
        marginLeft: 32,
        marginBottom: 24,
        height: 95,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        flexDirection: 'row',
    },
    textList:{
        color: 'black',
        fontSize: 23,
        elevation: 10
    },
    precoList:{
        color: '#c62c36',
        fontSize: 23,
        fontWeight: 'bold',
        elevation: 25
    },
    dataList:{
        color: '#626363',
        textAlign: 'right',
        marginRight: 32
    }
})