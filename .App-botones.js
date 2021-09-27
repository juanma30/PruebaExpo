//Usa hooks
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Dimensions, Button, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, TextInput, Dimensions, Button, ScrollView } from 'react-native';

//const { width, height } = Dimensions.get('window') //Obtiene las medidas de la pantalla

/*
export default function App() {
  const [ text, setText ] = useState('Valor por defecto')
  const [ submit, setSubmit ] = useState('')
  return (
    <View style={styles.container}>
      <Text>Texto: {submit}</Text>
      <TextInput
        style={styles.input}
        placeholder='Escribe aqui...'
        onChangeText={ t => setText(t)}
        defaultValue={text}
      />
      <Button onPress={() => {
          setSubmit(text)
          alert('Texto eviado con exito!')
      }}
      title="Aceptar"/>
      <TouchableHighlight
        underlayColor={'#ac1'}
        activeOpacity={0.2}
        onPress={() => {
          setSubmit(text)
          alert('Texto enviado con TouchableHighlight')
        }}
      >
        <Text>Aceptar</Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          setSubmit(text)
          alert('Texto enviado con TouchableOpacity')
        }}
      >
        <Text>Aceptar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
*/

export default function App() {
  const [ text, setText ] = useState('Valor por defecto')
  const [ submit, setSubmit ] = useState('')
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <TextInput
          style={styles.input}
          placeholder='Escribe aqui...'
          onChangeText={ t => setText(t)}
          defaultValue={text}
        />
        <Button onPress={() => {
            setSubmit(text)
            alert('Texto eviado con exito!')
        }}
        title="Aceptar"/>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: "#eee",
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flex: 0.5,
  },
  input: {
    height: 40,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: '100%',
    marginTop: 30,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScrollView: {
    width: Dimensions.get('window').width,
    padding: 25,
  },
});
