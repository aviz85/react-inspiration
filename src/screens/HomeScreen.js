import React from 'react';
import { View, FlatList, StyleSheet, Share, ImageBackground } from 'react-native';
import { Card, Button, Text, Icon } from 'react-native-elements';

const quotes = [
  { 
    id: 1, 
    text: "כל מסע ארוך מתחיל בצעד קטן", 
    author: "לאו דזה",
    background: require('../../assets/backgrounds/nature.jpg')
  },
  { 
    id: 2, 
    text: "אם תרצו אין זו אגדה", 
    author: "בנימין זאב הרצל",
    background: require('../../assets/backgrounds/sky.jpg')
  },
  {
    id: 3,
    text: "הדרך הטובה ביותר לחזות את העתיד היא ליצור אותו",
    author: "פיטר דרוקר",
    background: require('../../assets/backgrounds/mountain.jpg')
  }
];

export default function HomeScreen({ navigation }) {
  const shareQuote = async (quote) => {
    try {
      await Share.share({
        message: `"${quote.text}" - ${quote.author}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const renderQuote = ({ item }) => (
    <Card containerStyle={styles.card}>
      <ImageBackground 
        source={item.background}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.overlay}>
          <Text style={styles.quoteText}>{item.text}</Text>
          <Text style={styles.author}>- {item.author}</Text>
          <View style={styles.buttonContainer}>
            <Button
              icon={<Icon name="share" color="#ffffff" />}
              title="שתף"
              onPress={() => shareQuote(item)}
              buttonStyle={styles.button}
            />
            <Button
              icon={<Icon name="favorite-border" color="#ffffff" />}
              title="שמור"
              onPress={() => navigation.navigate('Quote', { quote: item })}
              buttonStyle={styles.button}
            />
          </View>
        </View>
      </ImageBackground>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={quotes}
        renderItem={renderQuote}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 10,
  },
  card: {
    padding: 0,
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
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