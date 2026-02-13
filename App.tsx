import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const salvar = () => {
    Alert.alert(
    `Dados Salvos`,
    `Nome: ${nome}\nIdade: ${idade}`
    );
    };




  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Escreva Seu nome
      </Text>

      

      <TextInput
        style={styles.input}
        placeholder="Escreva seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.texto1}>
        Digite Sua Idade
      </Text>

      <TextInput
        style={styles.input1}
        placeholder= "Digite Sua Idade"
        value={idade}
        onChangeText={setIdade}
      />

      <Button title = "Salvar"
        onPress= {salvar}
      />
        
    </View>
  );
}






const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
  },

  texto1: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
  },





  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#836FFF", 
  },

  input: {
    backgroundColor: "white",
    textAlign: "center",
    width: "80%",
    borderRadius: 4,
    height:"5%",
    color: "#89CFF0",
    marginTop: "10px",
    marginBottom: "20px",
  } ,

  input1:{
    backgroundColor: "white",
    textAlign: "center",
    width: "80%",
    borderRadius: 4,
    height:"5%",
    color: "#89CFF0",
    marginTop: "10px",
    marginBottom: "20px",
  }
  
  
});
