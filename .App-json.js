//Usa hooks
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image } from 'react-native';

export default function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json() )
      .then( data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  if(loading) {
    return <View style={styles.center}><ActivityIndicator size="large" color="#ccc"/></View>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.list}>{item.name}</Text>}
        keyExtractor={ item => String(item.id) }
      />
      <Image
        style={styles.photo}
        source={require('./assets/icon.png')}
      />// or {uri('http....')}
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 60,
    width: 60,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
