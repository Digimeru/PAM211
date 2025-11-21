import { View, Text, StyleSheet } from 'react-native';

export default function Detalle() {
    return(
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Text style={styles.title}> Detalle de usuario </Text>
                <Text style={styles.body}> Usando Navegacion Stack </Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'black',
    },
    body: {
        fontSize: 16,
        marginTop: 10,
        color: 'blue'
    },
})