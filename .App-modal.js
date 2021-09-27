//Usa hooks
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';

export default function App() {
  const [modal, setModal] = useState(false)

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        >
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>Contenido del modal</Text>
            <Button title="Cerrar" onPress={() => setModal(!modal)} />
          </View>
        </View>
      </Modal>
      <View style={styles.button}>
        <Button title="Abrir modal" onPress={() => setModal(!modal)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  content: {
    backgroundColor: "#eee",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },
  button: {
    width: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 22,
  },
});
