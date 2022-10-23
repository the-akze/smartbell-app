import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import StartScreen from "./content/screens/startS";
import SignInScreen from "./content/screens/signInS";
import RegisterScreen from "./content/screens/registerS";
import firebaseConfig from "./dbConfig";
import { NavigationContainer } from "@react-navigation/native";
import BotTabNavigator from "./content/navigation/bottomTabN";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppContainer/>
      </NavigationContainer>
    );
  }
}

const SwitchNav = createSwitchNavigator({
  StartScreen: {
    screen: StartScreen,
  },
  SignInScreen: {
    screen: SignInScreen,
  },
  RegisterScreen: {
    screen: RegisterScreen,
  },
  HomeTabs: {
    screen: BotTabNavigator
  }
});

const AppContainer = createAppContainer(SwitchNav);

const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);
