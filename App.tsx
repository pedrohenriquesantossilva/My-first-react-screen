import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Meu nome é Pedro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Escreva seu nome"
      />

      <Button title = "Salvar"/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    color: '#FF2900',
    textAlign: 'center',
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000", 
  },

  input: {
    backgroundColor: "#C7C7C7",
    textAlign: "center",
    width: "80%",
    borderRadius: 4,
    height:"5%",
    color: "red"
  }
});
