//Usa hooks
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

export default function App() {
  const [locacion, setLocacion] = useState({})
  const buscaLocalizacion = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync()
    if(status !== 'granted') {
      return Alert.alert('No tiene los permisos para acceder a la geolocalización!')
    }
    const location = await Location.getCurrentPositionAsync({})
    setLocacion(location)
  }

  useEffect(() => {
    buscaLocalizacion()
  })
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {
          locacion.coords
          ? <Marker
              coordinate={locacion.coords}
              title='Yo'
              description="Mi posición actual"
              />
            : null
        }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 22,
  },
});
