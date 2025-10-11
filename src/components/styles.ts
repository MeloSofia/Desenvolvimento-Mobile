import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#e5e5e5",
    width: 350,
    marginLeft: 20,
  },

  itemNome: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222",
  },

  itemDescricao: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
    marginBottom: 6,
  },

  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  quantidadeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  botaoQuantidade: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },

  sinal: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(8, 3, 255, 1)",
  },

  quantidade: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  itemPreco: {
    color: "rgba(8, 3, 255, 1)",
    fontWeight: "bold",
    fontSize: 15,
  },
  resumoContainer: {
    marginTop: 12,
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingTop: 10,
  },

  resumoLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },

  resumoTexto: {
    fontSize: 15,
    color: "#444",
  },

  resumoValor: {
    fontSize: 15,
    color: "#444",
  },

  totalTitulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222",
  },

  totalValor: {
    fontSize: 17,
    fontWeight: "bold",
    color: "green",
  },
});
