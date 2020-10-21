import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Registro from '../pages/Registro';
import Consultar from '../pages/Consultar';
import CustomDrawer from '../pages/CustomDrawer';

import { Button, Text } from 'react-native';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} /> }
            drawerStyle={{
                backgroundColor: "black"
            }}
            drawerContentOptions={{
                labelStyle:{
                    fontWeight:"700",
                    fontSize: 16
                },
                activeTintColor:'#fff',
                activeBackgroundColor:'#00b94a',
                inactiveBackgroundColor:"#000",
                inactiveTintColor: '#fff',
                itemStyle:{
                    marginVertical: 5
                }
            }}
        >
            <AppDrawer.Screen name="Inicio" component={Home} />
            <AppDrawer.Screen name="Registro" component={Registro} />
            <AppDrawer.Screen name="Consultar" component={Consultar} />
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;