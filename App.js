import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CESDE</Text>
      <Text style={styles.subTitle}>Sistema de Notas</Text>
      <TextInput
        placeholder='Identificación:'
        style={styles.textInput}
      />
      <TextInput
        placeholder='Nombres:'
        style={styles.textInput}
      />
      <TextInput
        placeholder='Asignatura:'
        style={styles.textInput}
      />
      <TextInput
        placeholder='Nota 1 (30%):'
        style={styles.textInput}
      />
      <TextInput
        placeholder='Nota 2 (35%):'
        style={styles.textInput}
      />
      <TextInput
        placeholder='Nota 3 (35%):'
        style={styles.textInput}
      />
      <TextInput
        placeholder='Definitiva:'
        style={styles.textInput}
      />
      <TextInput
        placeholder='Observación:'
        style={styles.textInput}
      />
      <StatusBar style="auto" />
    </View>
    

    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e31c79',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    fontSize: 60,
    color: '#ffff',
    fontWeight: 'bold',
  },
  subTitle:{
    fontSize: 23,
    color: '#ffff', 
  },
  textInput:{
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    width: '60%',
    height: 40,
    marginTop:20,
    borderRadius: 30,
    backgroundColor: '#fff',
    paddingStart: 20,
  },
  buttons:{
    borderRadius: 30,
    padding: 5,
    width: '40%',
    justifyContent: "center",
    alignItems: "center",
    borderColor: '#ffff',
    backgroundColor: '#6f7074',
  }
});
