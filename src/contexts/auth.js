import React, { createContext, useState, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';
import { format } from 'date-fns';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
   const [user, setUser] = useState(null);
   const [carregado, setCarregado] = useState(true);

   useEffect(() => {
      async function carregar() {
         const dadosUser = await AsyncStorage.getItem('Auth_user');
         if (dadosUser) {
            setUser(JSON.parse(dadosUser));
            setCarregado(false);
         }
         setCarregado(false);
      }
      carregar();
   }, [])

   async function manter(data) {
      await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
   }


   async function adicionar(email, password, nome) {
      if (email.length < 7) {
         return alert(error.code);
      }
      await firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(async (value) => {
            let uid = value.user.uid;

            await firebase.database().ref('users').child(uid).set({
               nome: nome,
            })
               .then(() => {
                  let data = {
                     uid: uid,
                     nome: nome,
                     email: email
                  };
                  console.log(nome)
                  setUser(data);
               })
         }).catch(error => alert(error.code))
   }

   async function logar(email, password) {
      await firebase.auth().signInWithEmailAndPassword(email, password)
         .then(async (value) => {
            let uid = value.user.uid
            await firebase.database().ref('users').child(uid).once('value')
               .then((snapshot) => {
                  let data = {
                     uid: uid,
                     nome: snapshot.val().nome,
                     email: value.user.email,
                  }
                  console.log(data)
                  setUser(data);
                  manter(data);
               })
         })
         .catch((error) => alert(error.code))

   }

   async function deslogar() {
      await firebase.auth().signOut()
      await AsyncStorage.clear()
         .then(() => {
            setUser(null)
         })
   }
   return (
      <AuthContext.Provider value={{ logado: !!user, user, carregado, adicionar, logar, deslogar }}>
         {children}
      </AuthContext.Provider>
   );
}

export default AuthProvider;