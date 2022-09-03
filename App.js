import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = Stack;

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Navigator>
          <Screen name="Home" component={HomeScreen} />
        </Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
