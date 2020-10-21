import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
            name="SignIn" 
            component={SignIn}
            options={{headerShown:false}}/>

            <AuthStack.Screen 
            options={{
                headerStyle:{
                    backgroundColor: 'black',
                    borderBottomWidth: 1,
                    borderBottomColor: '#00b94a'
                },
                headerTintColor: 'white',
                headerTitle: 'Cadastrar'
            }
            }
            name="SignUp" 
            component={SignUp} />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;