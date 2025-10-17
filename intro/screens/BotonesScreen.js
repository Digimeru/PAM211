import { Text, StyleSheet, View, TouchableOpacity, Switch } from 'react-native';
import React, {use, useState } from 'react';

export default function BotonesScreen() {

    const [prendido, setPrendido] = useState(false);
    const backgroundColor = prendido ? '#ffffffff' :'#000000ff';
    const textColor = prendido ? '#000000ff' : '#ffffffff';

    return (

       //el signo de "?" vale como un if/else. Se llama operador terneareo.
       //esta vista muestra los dos botones para poder cambiar sus estados y ponerlo como prendido o apagado.
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>

        <Text style={[styles.text, {color: textColor}]}> Estado: {prendido ? 'Prendido' : 'Apagado'} </Text> 

        <TouchableOpacity style={styles.botonEncender} onPress={()=> setPrendido(true)}>

          <Text style = {styles.textoBoton}> Prender </Text> 
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonApagar} onPress={()=> setPrendido(false)}> 

          <Text style = {styles.textoBoton}> Apagar </Text> 

        </TouchableOpacity>

        <View style = {styles.switchContainer}>

          <Text style = {[styles.switchLabel, {color: textColor}]}>Control de Switch: </Text>
          <Switch value = {prendido} onValueChange={setPrendido}>  </Switch>

        </View>

      </View>
    )

}

const styles = StyleSheet.create({

 container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
text: {
  fontSize: 20,
  marginBottom: 30,
  fontWeight: 'bold',
},
botonEncender: {
  backgroundColor: 'green',
  paddingVertical: 10,
  paddingHorizontal: 25,
  bordenRadius: 8,
  marginBottom: 20,
  
},
botonApagar: {
  backgroundColor: 'red',
  paddingVertical: 10,
  paddingHorizontal: 25,
  bordenRadius: 8,
  marginBottom: 20,
},
textoBoton: {
  color: '#ffffffff',
  fontSize: 16,
  fontWeight: 600,
},
switchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
},
switchLabel: {
  fontSize: 16,
  marginRight: 10,
},

})