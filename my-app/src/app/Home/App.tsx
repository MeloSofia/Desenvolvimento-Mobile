import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
interface Item {
	id: string;
	nome: string;
}

export default function App() {
	const [item, setItem] = useState<string>("");
	const [lista, setLista] = useState<Item[]>([]);

	const adicionarItem = () => {
		if (item.trim() === "") return;
		setLista([...lista, { id: Date.now().toString(), nome: item }]);
		setItem("");
	};

	const renderItem = ({ item, index }: { item: Item; index: number }) => (
		<View
			style={[
				styles.item,
				// aplica linha embaixo de cada item, menos no último
				index !== lista.length - 1 && styles.itemLinha,
			]}
		>
			<AntDesign name="checkcircle" size={20} color="black" />
			<Text style={styles.texto}>{item.nome}</Text>
		</View>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.titulo}>Lista de Compras</Text>

			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Digite o Produto"
					placeholderTextColor="#ccc"
					value={item}
					onChangeText={setItem}
				/>
				<TouchableOpacity style={styles.botao} onPress={adicionarItem}>
					<AntDesign name="pluscircleo" size={24} color="white" />
				</TouchableOpacity>
			</View>

			<View
				style={{
					borderColor: "#000",
					borderWidth: 2,
					borderRadius: 10,
					padding: 10,
					flex: 1,
				}}
			>
				<FlatList
					data={lista}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	);
}

