import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';

const quotes = [
  { id: 1, text: "כל מסע ארוך מתחיל בצעד קטן", author: "לאו דזה" },
  { id: 2, text: "אם תרצו אין זו אגדה", author: "בנימין זאב הרצל" },
  // הוסף עוד ציטוטים כרצונך
];

export default function HomeScreen({ navigation }) {
  const renderQuote = ({ item }) => (
    <Card>
      <Text style={styles.quoteText}>{item.text}</Text>
      <Text style={styles.author}>- {item.author}</Text>
      <Button
        title="שתף"
        onPress={() => shareQuote(item)}
        containerStyle={styles.button}
      />
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={quotes}
        renderItem={renderQuote}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  quoteText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  author: {
    textAlign: 'right',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
}); 