// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Load from "./src/screens/Load";
import Escolha from "./src/screens/Escolha";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Escolha"
          component={Escolha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Load}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
