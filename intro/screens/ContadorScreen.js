
//1. Imports: Zona de imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{ useState } from 'react';



//2. Main: Zona de componentes
export default function ContadorScreen() {

  const [contador, setContador]= useState(0); //El contador es la variable y setContador es la función

  return (
                        //Styles es un objeto, y container una clase de
    <View style={styles.container}> 

      <Text style={styles.texto}> Contador: </Text>
      <Text style={styles.texto2}> {contador} </Text>

      <View style={styles.botonesContainer}>
      <Button color='red' title='Agregar' onPress={()=>setContador(contador+1)}/>
      <Button color='gold' title='Quitar' onPress={()=>setContador(contador-1)}/>
      <Button color='blue' title='Reiniciar' onPress={()=>setContador(0)}/>
      </View>

      <StatusBar style="auto" />

    </View>


  );
}


//3. Estilos: Zona estetica para componentes
const styles = StyleSheet.create({ //Clase styles, que usa la librería StyleSheet para realizar estilos.
  container: {
    flex: 1,
    backgroundColor: '#baf8e3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'rgba(44, 88, 59, 1)',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
  texto2: {
    color: 'rgba(9, 35, 75, 1)',
    fontSize: 40,
    fontFamily: 'Courier',
    fontWeight: '300',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  botonesContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 20,
  },
});
