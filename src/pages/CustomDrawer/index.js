import React, { useContext } from 'react';
import { Text, Image, View } from 'react-native';
import {DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props) {
    const { user, deslogar } = useContext(AuthContext);
    return (
        <DrawerContentScrollView>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
                <Image 
                    source={require('../../imgs/logo.png')}
                    style={{width: 85, height: 85, marginBottom: 15}}
                    resizeMode="contain"
                />

                <Text style={{fontSize: 18, color: "#fff"}}> Bem-vindo </Text>
                <Text style={{color: '#fff', fontSize: 19, fontWeight: '700', marginBottom: 20}}>{ user && user.nome }</Text>

                
            </View>
            <DrawerItemList {...props} />
            <DrawerItem 
                {...props}
                label="Sair"
                inactiveBackgroundColor="#c62c36"
                style={{marginTop: 50}}
                onPress={() => deslogar()}
            />
        </DrawerContentScrollView>
    
    );
}