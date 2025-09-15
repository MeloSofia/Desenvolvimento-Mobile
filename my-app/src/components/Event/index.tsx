import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
	name: string;
	onClick?: () => void;
};

export function Event({ name }: Props) {
	return (
		<View style={styles.container}>
			<AntDesign name="checkcircleo" size={24} color="black" marginLeft="3%"/>
			<Text style={styles.text}> {name} </Text>
			<TouchableOpacity style={styles.button}></TouchableOpacity>
		</View>
	);
}
