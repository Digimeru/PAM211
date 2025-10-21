import { Text, StyleSheet, View, Button, Alert, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'

export default function TextInputScreen() {

  const [nombre, setNombre] = useState('')
  const [contraseña, setConstraseña] = useState('')

  const mostrarAlerta = () => {
    if (nombre.trim() === ''){
      if (Platform.OS === 'web'){
        window.alert('Error, por favor ingrese su nombre');
      } else{
        Alert.alert('Error, por favor ingrese su nombre');
      }}
      else{
        if (Platform.OS === 'web'){
          window.alert(`Hola ${nombre}, bienvenido/a!`);
        } else{
          Alert.alert(`Hola ${nombre}, bienvenido/a!`);
        }}
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> TextInputScreen </Text>

      <TextInput style={styles.recuadro} placeholder='Ingrese su nombre' value={nombre} onChangeText={setNombre} maxLength={50}>
      </TextInput>
      
      <TextInput 
      style={styles.recuadro} 
      placeholder='Ingrese una contraseña' 
      secureTextEntry={true} 
      value={contraseña} 
      onChangeText={setConstraseña}> 
      </TextInput>

      <TextInput 
      style={styles.recuadro} 
      placeholder='Ingrese un comentario'
      multiline={true}
      numberOfLines={4}
      maxLength={200}>
      </TextInput>


      <Button color='blue' title='Mostrar saludo' onPress={mostrarAlerta}/>
    </View>
  );

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  recuadro: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    marginBottom: 20,
  },

});
