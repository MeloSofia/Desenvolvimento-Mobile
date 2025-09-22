import React, { useState } from "react";
import { View, Text } from "react-native";
import InputProduct from "../../components/input/input.js";
import ShoppingList from "../../components/lista/listaDeCompras.js";
import styles from "./styles";

export default function App() {
	const [items, setItems] = useState<string[]>(["Maçã", "Banana", "Melancia"]);

	// Função para adicionar novo item
	const addItem = (item: string) => {
		if (item.trim() !== "") {
			setItems((prev) => [...prev, item]);
		}
	};

	// Função para excluir item pelo índice
	const removeItem = (index: number) => {
		setItems((prev) => prev.filter((_, i) => i !== index));
	};

	/*
  // --- Código de contagem comentado ---
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

  const atualizarNumeros = () => {
    setNum1((prev) => prev + 1);
    setNum2((prev) => prev + 10);
    setNum3((prev) => prev + 100);
  };
  */

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Lista de Compras</Text>

			{/* Componente de entrada */}
			<InputProduct onAdd={addItem} />

			{/* Lista de compras com botão de excluir */}
			<ShoppingList items={items} onRemove={removeItem} />

			{/*
      <Text style={styles.text}>Número 1: {num1}</Text>
      <Text style={styles.text}>Número 2: {num2}</Text>
      <Text style={styles.text}>Número 3: {num3}</Text>
      <Button title="Atualizar Números" onPress={atualizarNumeros} />
      */}
		</View>
	);
}
