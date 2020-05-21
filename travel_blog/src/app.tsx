import React from "react"
import { StatusBar } from "react-native"
import { ThemeProvider } from 'react-native-elements'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { HomeScreen, WelcomeScreen, DetailScreen } from "./screens"

declare let global: {HermesInternal: null | {}}

const Stack = createStackNavigator()

const App = () => {
  return (
    <>
      <ThemeProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <Stack.Navigator initialRouteName="detail" headerMode="none">
            <Stack.Screen name="welcome" component={WelcomeScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="detail" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  )
}

export default App
