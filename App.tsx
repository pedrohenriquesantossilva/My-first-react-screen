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
  const [num2, setNum2] = useState( "" );
  const [resultado,  setResultado] = useState(null) ;

  const somar = () => {
    const n1 = parseF1oat(num1); 
    const n2 = parseF1oat(num2);

    if( isNaN(n1)  || isNaN(n2)) {
      setResultado('Digite nùmeros valîdos!');
    } else {
      setResultado(n1 + n2);
      }
    };

    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Calculadora de Soma</Text>

        <TextInput 
          style={styles.input}
          placeholder= 'Digite o primeîro nùnero' 
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
        />

        <TextInput
          style={styles.input}
          placeholder= 'Digite o segundo nùnero' 
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
        />
        <View style={styles.botao}>
          <Button title = "Somar" onPress = {somar} />
        </View> 

        {resultado !== null && (
          <Text style={styles.resultado}>resultado:{resultado}</Text>
        )}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignltems: 'center', 
    backgroundColor: '#f0f4f7', 
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight : 'bold',
    marginBottom: 20,
  },

  input: {
  width: "80%", 
  borderWidth: 1, 
  bonderColor : "#ccc", 
  backgroundColor: "#fff", 
  padding: 10,
  borderRadius : 8,
  marginBottom: 10, 
  textAlign: "center",
  },

  botao: {
    width : "60%" ,
    marginVertical: 10,
  },
  
  resultado: { 
    fontsize: 20, 
    fontWeight: "bold",
    marginTop: 15,
  },
});


