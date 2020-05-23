import React from "react"
import { StatusBar } from "react-native"
import { ThemeProvider } from 'react-native-elements'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { HomeScreen, WelcomeScreen, DetailScreen, TopicScreen } from "./screens"

declare let global: {HermesInternal: null | {}}

type RootStackParamList = {
  welcome: null;
  home: null;
  detail: null;
  topic: null
};

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <>
      <ThemeProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <Stack.Navigator initialRouteName="topic" headerMode="none">
            <Stack.Screen name="welcome" component={WelcomeScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="detail" component={DetailScreen} />
            <Stack.Screen name="topic" component={TopicScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  )
}

export default App
