import { Text, StyleSheet, View, Image, ImageBackground, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';

const BackgroundImage = require("../assets/splash-icon.png");
const BackgroundImageMain = require("../assets/Aaaaaddw.png");

export default function ImageBackgroundScreen({navigation}) {

  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    },3000);
    return () => clearTimeout(timer);
  },[]);

  if (showSplash) {
    return (
      <ImageBackground source={BackgroundImage} style={styles.background} resizeMode='cover'>

        <View style={styles.overlay}>

          <Text style={styles.title}> Bienvenido </Text>
          <Text style={styles.title}> Cargando... </Text>

        </View>

      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={BackgroundImageMain} style={styles.background} resizeMode='cover'>
    <View style={styles.mainScreen}>

      <Text style={styles.mainText2}> Bienvenido a la pantalla principal de la aplicacion </Text>
      
    </View>
    </ImageBackground>
  );

}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    color: '#000000ff',
    textAlign: 'center',
  },
  mainText2: {
    fontSize: 18,
    color: '#ffffffff',
    textAlign: 'center',
  },
});
