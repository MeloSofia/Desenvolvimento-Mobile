import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { styles } from './styles';

// 👇 Defina o tipo do item
type Item = {
  id: string;
  nome: string;
  calorias: number;
};

export default function App() {
  const [alimento, setAlimento] = useState('');
  const [calorias, setCalorias] = useState('');
  // 👇 Diga ao React que "itens" é uma lista de "Item"
  const [itens, setItens] = useState<Item[]>([]);

  const adicionarItem = () => {
    if (alimento && calorias) {
      const novoItem: Item = {
        id: Date.now().toString(),
        nome: alimento,
        calorias: parseInt(calorias),
      };
      setItens([...itens, novoItem]); // ✅ agora o TS entende o tipo
      setAlimento('');
      setCalorias('');
    }
  };

  const removerItem = (id: string) => {
    setItens(itens.filter(item => item.id !== id));
  };

  const limparTodos = () => {
    setItens([]);
  };

  const totalCalorias = itens.reduce((total, item) => total + item.calorias, 0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Calorias</Text>

      <TextInput
        placeholder="Digite o alimento"
        style={styles.input}
        value={alimento}
        onChangeText={setAlimento}
      />
      <TextInput
        placeholder="Digite as calorias"
        style={styles.input}
        value={calorias}
        onChangeText={setCalorias}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
        <Text style={styles.botaoTexto}>Adicionar</Text>
      </TouchableOpacity>

      <View style={styles.listaCabecalho}>
        <Text style={styles.listaTitulo}>Item:</Text>
        <Text style={styles.listaTitulo}>Calorias:</Text>
        <TouchableOpacity onPress={limparTodos}>
          <Text style={styles.limparTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={itens}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemLinha}>
            <Text>{item.nome}</Text>
            <Text>{item.calorias} kcal</Text>
            <TouchableOpacity onPress={() => removerItem(item.id)}>
              <Text style={styles.removerTexto}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.totalBox}>
        <Text style={styles.totalTexto}>{totalCalorias} kcal</Text>
      </View>
    </SafeAreaView>
  );
}
