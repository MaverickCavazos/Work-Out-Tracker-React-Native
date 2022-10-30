import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Image, SafeAreaView, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Workouts from './app/screens/Workouts';

export default function App() {
  
  const handlePress = () => console.log("text press");
  const {landscape} = useDeviceOrientation();
    
  
  return (
  
     <Workouts></Workouts>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
});
