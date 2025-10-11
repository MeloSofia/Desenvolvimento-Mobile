import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { ItemCarrinho } from "../../components/itemCarrinho";

export default function App() {
  const [itens, setItens] = useState<any[]>([]);
  const [nomeProduto, setNomeProduto] = useState("");
  const [nomeProdutor, setNomeProdutor] = useState("");
  const [valor, setValor] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const taxaEntrega = 5;

  const adicionarItem = () => {
    if (!nomeProduto || !nomeProdutor || !valor || !quantidade) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    const novoItem = {
      id: Date.now().toString(),
      nomeProduto,
      nomeProdutor,
      valor: parseFloat(valor),
      quantidade: parseInt(quantidade),
    };

    setItens([...itens, novoItem]);
    setNomeProduto("");
    setNomeProdutor("");
    setValor("");
    setQuantidade("");
  };

  const alterarQuantidade = (id: string, delta: number) => {
    setItens((prevItens) =>
      prevItens.map((item) =>
        item.id === id
          ? {
              ...item,
              quantidade: Math.max(item.quantidade + delta, 1),
            }
          : item
      )
    );
  };

  const total = itens.reduce(
    (soma, item) => soma + item.valor * item.quantidade,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Carrinho de Compras</Text>

      <View style={styles.formContainer}>
        <TextInput
          placeholder="Nome do produto"
          style={styles.input}
          value={nomeProduto}
          onChangeText={setNomeProduto}
        />
        <TextInput
          placeholder="Nome do produtor"
          style={styles.input}
          value={nomeProdutor}
          onChangeText={setNomeProdutor}
        />
        <TextInput
          placeholder="Valor (R$)"
          style={styles.input}
          keyboardType="numeric"
          value={valor}
          onChangeText={setValor}
        />
        <TextInput
          placeholder="Quantidade"
          style={styles.input}
          keyboardType="numeric"
          value={quantidade}
          onChangeText={setQuantidade}
        />

        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarItem}>
          <Text style={styles.textoBotao}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemCarrinho
            id={item.id}
            nomeProduto={item.nomeProduto}
            nomeProdutor={item.nomeProdutor}
            valor={item.valor}
            quantidade={item.quantidade}
            onAlterarQuantidade={alterarQuantidade}
            
          />
        )}
      />

      <View style={styles.resumoContainer}>
        <View style={styles.resumoLinha}>
          <Text >Taxa de entrega (45 - 60 min)</Text>
          <Text>R${taxaEntrega.toFixed(2)}</Text>
        </View>

        <View style={styles.resumoLinha}>
          <Text style={styles.totalTitulo}>Total do pedido</Text>
          <Text style={styles.totalValor}>
            R${(total + taxaEntrega).toFixed(2)}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
