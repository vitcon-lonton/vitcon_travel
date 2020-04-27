import React from "react"
import { StatusBar } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { DemoScreen, WelcomeScreen } from "./screens"

declare let global: {HermesInternal: null | {}}

const Stack = createStackNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator initialRouteName="welcome" headerMode="none">
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="demo" component={DemoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
