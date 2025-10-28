import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';

export default function ScrollViewScreen() {

    return (
      <View style={styles.container}> 
        <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={true}>
          <Text style={styles.title}>Yu-Gi-Oh! </Text>
          <Text style={styles.subtitleRed}> El universo de Yu-Gi-Oh! </Text>
          <Text style={styles.text}> Yu-Gi-Oh! es una franquicia japonesa creada por Kazuki Takahashi en 1996, originalmente como un manga publicado 
            en la revista Weekly Shōnen Jump. Aunque el manga exploraba varios juegos, el más popular fue el "Juego de Duelo", que 
            eventualmente se convirtió en el famoso juego de cartas coleccionables. Desde entonces, Yu-Gi-Oh! ha evolucionado en múltiples 
            formatos: anime, videojuegos, torneos internacionales y una comunidad global activa. </Text>

          <Text style={styles.subtitleRed}> Orígenes del manga y el anime </Text>
          <Text style={styles.text}> El manga original presentaba a Yugi Mutou, un joven que resolvía conflictos a través de juegos, especialmente el 
            Juego de Duelo. El anime adaptó esta historia y la expandió, introduciendo arcos como Duelist Kingdom y Battle City, que 
            popularizaron personajes como Seto Kaiba y Joey Wheeler. La serie se convirtió en un fenómeno global, con doblajes en múltiples 
            idiomas y una base de fans sólida. </Text>

          <Text style={styles.subtitleRed}> Mecánicas del juego de cartas </Text>
          <Text style={styles.text}> El juego de cartas Yu-Gi-Oh! se basa en enfrentamientos entre dos jugadores que usan mazos personalizados. Cada jugador 
            comienza con 8000 puntos de vida y utiliza cartas de monstruo, hechizo y trampa para atacar, defender y manipular el campo de juego. 
            Las mecánicas clave incluyen: invocación normal y especial, fases del turno, y tipos de cartas como monstruos normales, de efecto, fusiones, 
            sincronía, Xyz, péndulo y enlace. La estrategia depende del tipo de mazo, la sinergia entre cartas y el conocimiento del metajuego. </Text>

          <Text style={styles.subtitleRed}> Impacto cultural y competitivo </Text>
          <Text style={styles.text}> Yu-Gi-Oh! ha influido en generaciones de jugadores y creadores. Su presencia en convenciones, torneos oficiales como 
            el Yu-Gi-Oh! World Championship, y plataformas digitales como Master Duel han mantenido viva la franquicia. Además, ha inspirado
             memes, coleccionismo, y debates sobre diseño de juego y balance competitivo. </Text>

          <Text style={styles.subtitleRed}> Curiosidades del universo Yu-Gi-Oh! </Text>
          <Text style={styles.textRed}> - El nombre "Yu-Gi-Oh!" significa "Rey de los Juegos" en japonés. </Text>
          <Text style={styles.textRed}> - El personaje Seto Kaiba fue inspirado en un lector real que envió una carta desafiante al autor. </Text>
          <Text style={styles.textRed}> - Existen cartas prohibidas en torneos oficiales por ser demasiado poderosas, como "Change of Heart" y "Pot of Greed". </Text>
          <Text style={styles.textRed}> - El anime ha tenido múltiples series: Duel Monsters, GX, 5Ds, ZEXAL, ARC-V, VRAINS y SEVENS, cada una con su propio estilo y mecánicas. </Text>

        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1538ff',
  },
  scrollArea: {
    flex: 1,
  },
  item: {
    backgroundColor: '#7ecf49ff',
    color: 'black',
    marginVertical: 8,
    borderRadius: 10,
    textAlign: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    TextAlign: 'center',
    marginBottom: 20,
  },
  subtitleRed: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#c2b720ff',
    marginVertical: 12,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '95%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
    lineWeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    padding: 10,
  },
  textRed: {
    fontSize: 16, 
    color: 'white',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    padding: 10,
    backgroundColor:'#c2b720ff',
    borderRadius: 10,
  },
})
