import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState(""); 

  function updateText(text) {
    setText(text); 
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>TA2</Text>
      </View>
      <View style={styles.secondContainer}>
        <TextInput 
          placeholder='Escribe algo...'
          onChangeText={updateText}
          value={text}
          style={styles.input}
        />
        <Text style={styles.secondText}>Texto escrito: {text} </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5D9',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  topContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  text: {
    fontSize: 50,
    fontFamily: 'Times New Roman'
  }, 
  secondContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    fontSize: 30,
    borderRadius: 15,
    fontFamily: 'Times New Roman',
    width: 300,
    textAlign: 'center'
  },
  secondText: {
    fontSize: 30,
    fontFamily: 'Times New Roman'
  }
});
