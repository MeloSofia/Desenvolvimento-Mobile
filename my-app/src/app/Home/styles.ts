// src/styles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#D1D1D1",
		padding: 20,
	},
	titulo: {
		fontSize: 24,
		fontWeight: "bold",
		alignSelf: "center",
		marginTop: 30,
		marginBottom: 20,
		color: "#2E3A59",
	},
	input: {
		backgroundColor: "#fff",
		padding: 20,
		width:350,
		marginLeft: 20,
		borderRadius: 8,
		marginBottom: 10,
	},
	botao: {
		backgroundColor: "#3F51B5",
		padding: 12,
		borderRadius: 8,
		alignItems: "center",
		marginBottom: 20,
		width:350,
		marginLeft: 20,
	},
	botaoTexto: {
		color: "#fff",
		fontWeight: "bold",
	},
	listaCabecalho: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingBottom: 10,
		backgroundColor: "#3F51B5",
		padding: 12,
		borderRadius: 8,
		alignItems: "center",
		marginBottom: 20,
		width:350,
		marginLeft: 20,
	},
	listaTitulo: {
		fontWeight: "bold",
		fontSize: 15,
		color: "#fff",
	},
	limparTexto: {
		color: "red",
		fontSize: 15,
	},
	itemLinha: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#FFF",
		padding: 10,
		marginBottom: 8,
		borderRadius: 6,
		width:350,
		marginLeft: 20,
	
	},
	removerTexto: {
		color: "red",
		fontSize: 16,
	},
	totalBox: {
		position: "absolute",
		bottom: 20,
		right: 20,
		backgroundColor: "#FFF",
		paddingVertical: 10,
		paddingHorizontal: 50,
		borderRadius: 20,
	},
	totalTexto: {
		fontWeight: "bold",
		fontSize: 16,
	},
});
