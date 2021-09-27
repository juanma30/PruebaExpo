//Usa hooks
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';

const data = [
  { key:1, name: 'Lucero'},
  { key:2, name: 'Juan'},
  { key:3, name: 'Roxy'},
  { key:4, name: 'Alex'},
  { key:5, name: 'Keanu'},
  { key:6, name: 'Penny'},
  { key:7, name: 'Lex'},
  { key:8, name: 'Silvestre'},
  { key:9, name: 'Luna'},
  { key:10, name: 'Tupido Matz'},
  { key:11, name: 'Benny'},
]

/*
export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.list}>{item.name}</Text>}
      />
    </View>
  );
}
*/

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: 'Grupo 1',
            data: data.slice(0,7),
          },
          {
            title: 'Grupo 2',
            data: data.slice(7),
          },
        ]}
        renderItem={ ({ item }) => <Text style={styles.list}>{item.name}</Text> }
        renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22,
  },
  list: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  section: {
    fontSize: 16,
    fontWeigth: 'bold',
    backgroundColor: "#ccc",
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
  },
});
