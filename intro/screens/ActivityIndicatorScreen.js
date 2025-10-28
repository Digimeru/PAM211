import { Text, StyleSheet, View, Alert, Platform, ActivityIndicator, Button } from 'react-native'
import React, { useState } from 'react'

export default function ActivityIndicatorScreen() {

  const[cargando, Setcargando] = useState(false);
  const carga =()=>{ 
    Setcargando(true);
    setTimeout(()=>{
      Setcargando(false);
      if(Platform.OS === 'web'){
        window.alert('Carga completa');
      } else{
        Alert.alert("Carga completa")
      }
    }, 3000);
  }

    return (
      <View style={styles.container}>
        <Text style={styles.texto}> Presione para iniciar la carga </Text>
        <View style={styles.botonesContainer}>
          {cargando ? (<ActivityIndicator size='large' color='red'> </ActivityIndicator>) : (<Button color='yellow' title='Presiona para iniciar' onPress={carga}> </Button>) }
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e1d5ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#e2c72dff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontStyle: 'italic'
  },
  botonesContainer: {
    marginTop: 20,
    gap: 20,
  },
})
