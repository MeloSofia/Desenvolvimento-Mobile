import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#edebe6",
		padding: 20,
		paddingTop: 50,
	},
	titulo: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
		color: "#000",
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
	},
	input: {
		flex: 1,
		backgroundColor: "#19274e",
		color: "#fff",
		paddingHorizontal: 10,
		height: 50,
		borderRadius: 5,
	},
	botao: {
		marginLeft: 10,
		backgroundColor: "#19274e",
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
	},
	item: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
	},
	itemLinha: {
		borderBottomWidth: 1,
		borderColor: "#19274e",
	},
	texto: {
		marginLeft: 10,
		fontSize: 18,
	},
});

