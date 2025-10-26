import { Text, StyleSheet, View, Alert, TextInput, Platform, ImageBackground, Dimensions, TouchableOpacity, Image, ActivityIndicator, Switch } from 'react-native'
import React, { useState } from 'react'



export default function LoginScreen({ navigation }) {

    const[username, setUsername] = useState('');
    const[correo, setCorreo] = useState('');
    const[password, setPassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const backgroundImage = require("../assets/Charlotita.jpg");
    const loadingImage = require("../assets/Q84O.jpg");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        if ((username.trim() === '') || (password.trim() === '') || (correo.trim() === '')) {
            if (Platform.OS === 'web') {
                window.alert('Error, por favor complete los campos');
            } else {
                Alert.alert('Error, por favor complete los campos');
            }
            return;
        }

        if (!acceptedTerms) {
            if (Platform.OS === 'web') {
                window.alert('Debe aceptar los términos y condiciones');
            } else {
                Alert.alert('Debe aceptar los términos y condiciones');
            }
            return;
        }

        const successMessage = `Nombre: ${username}\nEmail: ${correo}`;

        if (Platform.OS === 'web') {
            window.alert(`Registro exitoso\n${successMessage}`);
            StartNavigate();
        } else {
            Alert.alert(
                'Registro exitoso',
                successMessage,
                [
                    { text: 'OK', onPress: () => StartNavigate() }
                ],
                { cancelable: false }
            );
        }
    };

    const StartNavigate = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            if (navigation && typeof navigation.navigate === 'function') {
                navigation.navigate('MenuScreen');
            }
        }, 2000);
    };

    return (

    <ImageBackground source={backgroundImage} style={styles.background} resizeMode='cover'>
        <View style={styles.container}>
            <Text style={styles.titulo}> Registro de usuario </Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={correo}
                onChangeText={setCorreo}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <View style={styles.acceptRow}>
                <Text style={styles.acceptText}>Aceptar términos y condiciones</Text>
                <Switch
                    value={acceptedTerms}
                    onValueChange={setAcceptedTerms}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={acceptedTerms ? '#007bff' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                />
            </View>

            <TouchableOpacity
                style={[styles.registerButton, !acceptedTerms && styles.registerButtonDisabled]}
                onPress={handleLogin}
                disabled={!acceptedTerms}
                activeOpacity={0.8}
            >
                <Text style={styles.registerButtonText}>Registrarse</Text>
            </TouchableOpacity>

        </View>

        {isLoading && (
            <View style={styles.loadingOverlay}>
                <View style={styles.loadingBox}>
                    <Image source={loadingImage} style={styles.loadingImage} resizeMode="contain" />
                    <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 10 }} />
                    <Text style={styles.loadingText}>Cargando...</Text>
                </View>
            </View>
        )}

        </ImageBackground>
    )

}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        width: '80%',
    },

    background: {
        width: width,
        height: height,
        justifyContent: 'center',
    },

    acceptRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '80%',
        justifyContent: 'space-between',
    },

    acceptText: {
        fontSize: 16,
        color: '#222',
        flex: 1,
        marginRight: 10,
    },

    registerButton: {
        width: '80%',
        backgroundColor: '#007bff',
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: 'center',
    },

    registerButtonDisabled: {
        backgroundColor: '#89b7ff',
    },

    registerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    loadingBox: {
        width: 220,
        height: 220,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    },

    loadingImage: {
        width: 140,
        height: 100,
    },

    loadingText: {
        marginTop: 8,
        fontSize: 16,
        color: '#333',
    },

})
