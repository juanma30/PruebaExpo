//Usa hooks
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Texto = (props) => {
  //Este arreglo recibe dos parametros, una variable y una funcion
  const { valor } = props
  const [texto, setTexto] = useState(valor)
  const actualizaTexto = () => setTexto('Mira como cambia el texto al dar click')
  return (
    <Text style={[styles.text, props.style]} onPress={actualizaTexto}>{texto}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red} valor={'Demo de texto'}/>
      <Texto style={styles.orange} valor={'Otro demo de texto'}/>
      <Texto style={styles.yellow} valor={'Ultimo demo de texto...'}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    height: 100,//Si no se le da px toma como medida los pixeles
    width: 100 //de la pantalla del equipo
  },
  //Con flex se suman todos 3 + 2 + 1 = 6
  //Despues se divide 6 entre cada valor de flex y le asigna un ancho
  red: {
    //flex:1,
    backgroundColor: '#ce1717',
    width: 'auto'
  },
  orange: {
    //flex:2,
    backgroundColor: '#ffa500',
    width: 'auto'
  },
  yellow: {
    //flex:3,
    backgroundColor: '#e3e313',
    width: 'auto'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',//Horizontal
    //alignSelf: 'stretch',
    justifyContent: 'space-evenly',//Vertical
  },
});
