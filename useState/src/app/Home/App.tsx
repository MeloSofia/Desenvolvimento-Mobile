import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(1);
  const [countTen, setCountTen] = useState(10);
  const [countHund, setCountHund] = useState(100);
 
  function handleClick(){
    console.log("Botão foi clicado");
    setCount (val => val+1);
    setCountTen(val => val + 10);
    setCountHund(val => val + 100);
  }

  return (
		<View style={styles.container}>
		<Text>Teste de netState</Text>
		<Button onPress={handleClick} title="Click aqui" />
		<Text>Contador 1: {count}</Text>
		<Text>Contador 10: {countTen}</Text>
		<Text>Contador 100: {countHund}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
