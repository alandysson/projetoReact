import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AuthProvider from './src/contexts/auth';

console.disableYellowBox = true;

import Routes from './src/routes/index'

export default function App() {
 return (
   <NavigationContainer>
     <AuthProvider>
      <StatusBar backgroundColor="black" barStyle="light-content"/>
      <Routes />
     </AuthProvider>
   </NavigationContainer>
  );
}