import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-gesture-handler';

import Detalle from "./detalle";
import Profile from "./profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Detalle" component={Detalle}/>
            </Stack.Navigator>
        </NavigationContainer>
    </NavigationIndependentTree>
    
  );
}
