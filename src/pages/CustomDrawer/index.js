import React, { useContext } from 'react';
import {DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../../contexts/auth';
import { Container, DrawerText, DrawerImage } from "./styles.js"

export default function CustomDrawer(props) {
  const { user, deslogar } = useContext(AuthContext);
  return (
    <DrawerContentScrollView>
      <Container>
        <DrawerImage 
          source={require('../../imgs/logo.png')}
          resizeMode="contain"
        />
        <DrawerText mainTitle> Bem-vindo </DrawerText>
        <DrawerText textWeigth marginText>{ user && user.nome }</DrawerText>
      </Container>
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