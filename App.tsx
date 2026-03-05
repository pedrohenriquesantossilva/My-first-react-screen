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


calculadora


import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);
  const [resultad, setResultad] = useState(null);

  const somar = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Digite números válidos!");
    } else {
      setResultado(n1 + n2);
    }
  };
  const menos = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultad("Digite números válidos!");
    } else {
      setResultad(n1 - n2);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      
      <TextInput
        style={styles.input2}
        placeholder="Digite o segundo número"
        // Corrigido: keyboardType (estava separado)
        keyboardType="numeric" 
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.botao}>
        <Button title="Somar" onPress={somar} color="#2196F3" />
      </View>

      <View style={styles.botao2}>
        <Button title="menos" onPress={menos} color="#2196F3" />
      </View>


      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}

      {resultado !== null && (
        <Text style={styles.resultad}>Resultad: {resultad}</Text>
      )}
    </View>
  );
}

// Faltava o sinal de "=" e vírgulas entre as propriedades do estilo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f7",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "lightgreen",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    textAlign: "center",
  },
  input2: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    textAlign: "center",
  },
  botao: {
    width: "60%",
    marginVertical: 10,
  },

  botao2: {
    width: "60%",
    marginVertical: 10,
  },
  resultado: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    color: "#333",
  },
});
