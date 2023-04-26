import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomePage from './src/pages/HomePage';
import ProfilePage from './src/pages/ProfilePage';
import MorePage from './src/pages/MorePage';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5 } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Profile') {
                iconName = "user-circle";
              } else if (route.name === 'More') {
                iconName = "plus-square";
              }
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tabs.Screen name="More" component={MorePage} />
          <Tabs.Screen name="Home" component={HomePage} />
          <Tabs.Screen name="Profile" component={ProfilePage} />
        </Tabs.Navigator>
      </NavigationContainer >
    </SafeAreaProvider>
  );
}
