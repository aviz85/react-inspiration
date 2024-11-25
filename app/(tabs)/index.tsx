import React from 'react';
import { StyleSheet, ImageBackground, View, Share } from 'react-native';
import { Button, Text, Icon } from 'react-native-elements';

type Quote = {
  id: number;
  text: string;
  author: string;
  background: any;
};

const quotes: Quote[] = [
  { 
    id: 1, 
    text: "כל מסע ארוך מתחיל בצעד קטן", 
    author: "לאו דזה",
    background: require('../../assets/backgrounds/nature.png')
  },
  { 
    id: 2, 
    text: "אם תרצו אין זו אגדה", 
    author: "בנימין זאב הרצל",
    background: require('../../assets/backgrounds/sky.png')
  }
];

export default function HomeScreen() {
  const shareQuote = async (quote: Quote) => {
    try {
      await Share.share({
        message: `"${quote.text}" - ${quote.author}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {quotes.map((quote) => (
        <View key={quote.id} style={styles.card}>
          <ImageBackground 
            source={quote.background}
            style={styles.backgroundImage}
            imageStyle={styles.backgroundImageStyle}
          >
            <View style={styles.overlay}>
              <Text style={styles.quoteText}>{quote.text}</Text>
              <Text style={styles.author}>- {quote.author}</Text>
              <View style={styles.buttonContainer}>
                <Button
                  icon={<Icon name="share" color="#ffffff" />}
                  title="שתף"
                  onPress={() => shareQuote(quote)}
                  buttonStyle={styles.button}
                />
                <Button
                  icon={<Icon name="favorite-border" color="#ffffff" />}
                  title="שמור"
                  buttonStyle={styles.button}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  card: {
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
  },
  backgroundImageStyle: {
    opacity: 0.7,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    justifyContent: 'center',
  },
  quoteText: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  author: {
    textAlign: 'right',
    fontStyle: 'italic',
    marginBottom: 15,
    color: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'rgba(78, 116, 289, 0.8)',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});
