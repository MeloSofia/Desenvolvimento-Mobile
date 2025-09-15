import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
    borderWidth: 2,
		borderColor: "#5482",
		width: "100%",
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
		marginTop: "3%",
	},
	text: {
		color: "#000",
    marginLeft: "3%",
		flex: 1,
	},
	buttonText: {
		color: "#fff",
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},
});