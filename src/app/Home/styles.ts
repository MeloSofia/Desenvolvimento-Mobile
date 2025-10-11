import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  itensCarrinho:{
    backgroundColor: "#556"
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },

  formContainer: {
    marginBottom: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    fontSize: 15,
    width: 350,
    marginLeft: 20,
  },

  botaoAdicionar: {
    backgroundColor: "#020db1ff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    width: 350,
    marginLeft: 20,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },


  resumoContainer: {
    marginTop: 5,
    borderTopWidth: 2,
    borderColor: "#0e0088ff",
    paddingTop: 10,
    width: 360,
    marginLeft: 10
  },

  resumoLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },


  totalTitulo: {
    fontSize: 17,
    fontWeight: "bold",
  },

  totalValor: {
    fontSize: 17,
    fontWeight: "bold",
    color: "rgba(5, 18, 138, 1)",
  },
});
