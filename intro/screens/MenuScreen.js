import React, { useState } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputScreen from './TextInputScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch (screen) {
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'textinput':
            return <TextInputScreen/>;
        case 'imagebackground':
            return <ImageBackgroundScreen/>;
        case 'scrollview':
            return <ScrollViewScreen/>;
        case 'activityindicator':
            return <ActivityIndicatorScreen/>;
        case 'flatlist':
            return <FlatListScreen/>;
        case 'modal':
            return <ModalScreen/>;
        case 'menu':
            default:
                return (
                <View style={styles.container}>
                    <Text> Menu de Practicas </Text>
                    <Button color = 'green' onPress = {()=> setScreen('contador')} title='Pract: Contador'/>
                    <Button color = 'red' onPress = {()=> setScreen('botones')} title='Pract: Botones'/>    
                    <Button color = 'red' onPress = {()=> setScreen('textinput')} title='Pract: Textinput'/>
                    <Button color = 'red' onPress = {()=> setScreen('imagebackground')} title='Pract: Image Background'/>
                    <Button color = 'red' onPress = {()=> setScreen('scrollview')} title='Pract: Scroll View'/>
                    <Button color = 'red' onPress = {()=> setScreen('activityindicator')} title='Pract: Activity Indicator'/>
                    <Button color = 'red' onPress = {()=> setScreen('flatlist')} title='Pract: Flat List'/>
                    <Button color = 'red' onPress = {()=> setScreen('modal')} title='Pract: Modal'/>          
                </View>
                )
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#baf8e3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
