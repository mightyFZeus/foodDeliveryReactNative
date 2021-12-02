
import React, {  useState } from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import OnBoard from './screens/OnBoard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
// import { onBoard } from './utils/onBoard';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import Home from './screens/Home';
import COLORS from './utils/colors';
import { firebaseConfig } from './firebase';

const Stack = createNativeStackNavigator()

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)


// checking if firebase has been initailized
  
  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
    
  } else {
    firebase.app
  }

  firebase.auth().onAuthStateChanged( (auth,user) => {
      if (user != null) {
        console.log("We are authenticated now!");
        setLoggedIn(true)
      }

      // Do other things
  });
  return (
      <NavigationContainer>
          <StatusBar
              translucent={false}
              backgroundColor={COLORS.white}
              barStyle="dark-content"
          />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="onboard" component={OnBoard} />
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="register" component={Register} />
              <Stack.Screen name="home" component={Home} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
