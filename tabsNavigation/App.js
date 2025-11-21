import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/home';
import ProfileDeta from './screens/profileDeta';
import Settings from './screens/settings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let inconName;

            if (route.name === 'Home') {
              inconName = 'home';
            } else if (route.name === 'Profile'){
              inconName = 'person';
            } else if (route.name === 'Settings'){
              inconName = 'settings';
            }
            return <Ionicons name={inconName} size={size} color={color} />
          }
        })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profile" component={ProfileDeta} />
          <Tab.Screen name="Settings" component={Settings} />

      </Tab.Navigator>

    </NavigationContainer>
  );
}
