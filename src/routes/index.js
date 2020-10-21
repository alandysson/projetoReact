import React, {useContext} from 'react';
import {View, ActivityIndicator } from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { AuthContext } from '../contexts/auth';

function Routes() {
  const { logado, carregado } = useContext(AuthContext);
  if(carregado){
    return(
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="black"/>
      </View>
    )
  }
  return (
    logado ? <AppRoutes /> : <AuthRoutes />
  );
}

export default Routes;