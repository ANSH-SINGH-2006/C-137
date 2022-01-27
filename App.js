import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react"
import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import HomeScreen from "./screens/Home"
import DetailScreen from "./screens/Details"

export default function App() {
  return (
  <AppContainer/>
  );
}

const appStackNavigator= createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {HeaderShown: false}
    },
    Details: {screen: DetailScreen}
  },
  {
    intialRouteName: "Home"
  }
)

const AppContainer= createAppContainer(appStackNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
