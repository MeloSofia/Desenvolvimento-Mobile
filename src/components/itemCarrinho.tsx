import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ItemCarrinhoProps = {
  id: string;
  nomeProduto: string;
  nomeProdutor: string;
  valor: number;
  quantidade: number;
  onAlterarQuantidade: (id: string, delta: number) => void;
};

export function ItemCarrinho({
  id,
  nomeProduto,
  nomeProdutor,
  valor,
  quantidade,
  onAlterarQuantidade,
}: ItemCarrinhoProps) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemNome}>{nomeProduto}</Text>
      <Text style={styles.itemDescricao}>Produtor: {nomeProdutor}</Text>

      <View style={styles.itemRow}>
        <View style={styles.quantidadeContainer}>
          <TouchableOpacity
            onPress={() => onAlterarQuantidade(id, -1)}
            style={styles.botaoQuantidade}
          >
            <Text style={styles.sinal}>−</Text>
          </TouchableOpacity>

          <Text style={styles.quantidade}>{quantidade}</Text>

          <TouchableOpacity
            onPress={() => onAlterarQuantidade(id, +1)}
            style={styles.botaoQuantidade}
          >
            <Text style={styles.sinal}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.itemPreco}>
          R${(valor * quantidade).toFixed(2)}
        </Text>
      </View>
    </View>
  );
}
