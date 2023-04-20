
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';

export default function App() {

  let estudiantes=[]


  let estudiante = {
    identificacion:identificacion,
    nombres: nombres,
    asignatura: asignatura,
    nota1: nota1, 
    nota2: nota2, 
    nota3: nota3,
  };

  //Agregar estudiante al arreglo de objetos
      estudiantes.push(estudiante)
  

  // Definir las variables de estado del componente

  const [identificacion, setidentificacion] = useState(39167637);//estudiante.identificacion
  const [nombres, setnombres] = useState(estudiante.nombres);//'cristina'
  const [asignatura, setasignatura] = useState(estudiante.asignatura);//'matematicas'
  const [nota1, setnota1] = useState(estudiante.nota1);//3
  const [nota2, setnota2] = useState(estudiante.nota2);//5
  const [nota3, setnota3] = useState(estudiante.nota3);//4.5
  const [definitiva, setdefinitiva] = useState('');
  const [observacion, setobservacion] = useState('');

  console.log(estudiante)


  //setState (setidentificacion por ejemplo, capturamos lo que ingresemos en el input)

  //Eventos

  


  // Metodos o funciones

//Guardar(enviar)

const agregar=()=>{

  setidentificacion([...identificacion, identificacion])
  setnombres ([...nombres, nombres])
  setasignatura ([...asignatura, asignatura])
  setnota1 ([...nota1, nota1])
  setnota2 ([...nota2, nota2])
  setnota3 ([...nota3, nota3])


//if(identificacion == "" || nombres == "" || asignatura == "" || nota1 == "" || nota2 == "" || nota3 == "") 

}
//calcular la nota promedio
function calcularNota(nota1, nota2, nota3){
  return parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) / 3.0;
}
/*function Observacion(notaFinal){
  if notaFinal < 2

}*/


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CESDE</Text>
      <Text style={styles.subTitle}>Sistema de Notas</Text>
      <TextInput
        placeholder='Identificación:'
        style={styles.textInput}
        onChangeText={identificacion=> setidentificacion(identificacion)}
        value={identificacion}
      />
      <TextInput
        placeholder='Nombres:'
        style={styles.textInput}
        onChangeText={nombres=> setnombres(nombres)}
        value={nombres}
      />
      <TextInput
        placeholder='Asignatura:'
        style={styles.textInput}
        onChangeText={asignatura=> setasignatura(asignatura)}
        value={asignatura}
      />
      <TextInput
        placeholder='Nota 1 (30%):'
        style={styles.textInput}
        onChangeText={nota1=> setnota1(nota1)}
        value={nota1}
      />
      <TextInput
        placeholder='Nota 2 (35%):'
        style={styles.textInput}
        onChangeText={nota2=> setnota2(nota2)}
        value={nota2}
      />
      <TextInput
        placeholder='Nota 3 (35%):'
        style={styles.textInput}
        onChangeText={nota3=> setnota3(nota3)}
        value={nota3}
      />
      <Text
        style={styles.textInput}
        value={definitiva}
      />
      <Text
        style={styles.textInput}
        value={observacion}
      />
      <Text style={styles.textMessage}>{observacion}</Text>


      <View style={[styles.container, {marginTop: 30, flexDirection: "row"}]}
      >    
        <TouchableOpacity
            style={[{ backgroundColor: "green" }, styles.buttons]}
            onPress={agregar}
        >
          <Text style={styles.textButtons}>GUARDAR</Text>
        </TouchableOpacity>  
        <TouchableOpacity
            style={[{ backgroundColor: "green" }, styles.buttons]}
        >
          <Text style={styles.textButtons}>LIMPIAR</Text>
        </TouchableOpacity>
        
      </View>
      <View style={[styles.container, {marginTop: 20, flexDirection: "row"}]}
      >    
        <TouchableOpacity
            style={[{ backgroundColor: "green" }, styles.buttons]}
        >
          <Text style={styles.textButtons}>BUSCAR</Text>
        </TouchableOpacity>  

        
      </View>
    </View>

    
  );
  
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
    width: '30%',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#6f7074',
    marginTop:"center",
    marginLeft: 5,
    
  },
  textButtons: {
    color: '#fff',
    fontWeight: "bold",
  },

  textMessage: {
    color: '#000',
    fontWeight: "bold",
  },

  
});