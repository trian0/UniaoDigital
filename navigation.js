import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Entypo, Feather} from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import Principal from './src/screens/Principal';
import Elenco from './src/screens/Elenco';
import Agenda from './src/screens/Agenda';

function Tabs(){

  return(
    <Tab.Navigator
      tabBarOptions={{
        style:{
          borderTopColor: 'transparent'
        },
        tabStyle:{
          paddingBottom: 5,
          paddingTop: 5,
        }
      }}
    >
      <Tab.Screen 
      name="Ínicio" 
      component={Principal}
      options={{
        tabBarIcon: ({size, color}) => (
          <Entypo name="home" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen 
      name="Agenda" 
      component={Agenda}
      options={{
        tabBarIcon: ({size, color}) => (
          <Entypo name="calendar" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen 
      name="Elenco" 
      component={Elenco}
      options={{
        tabBarIcon: ({size, color}) => (
          <Entypo name="user" size={size} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  )
}

export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Principal" component={Tabs} options={{
          headerShown: false
        }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
