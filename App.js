
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';

let notas=[]


export default function App() {



  // Definir las variables de estado del componente

  const [identificacion, setIdentificacion] = useState('')
  const [nombres, setNombres] = useState('')
  const [asignatura, setAsignatura] = useState('')
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [definitiva, setDefinitiva] = useState('');
  const [observacion, setObservacion] = useState('');
  const [esValido, setEsValido] = useState('');
  const[mensaje, setMensaje] = useState('');





  //setState (setidentificacion por ejemplo, capturamos lo que ingresemos en el input)

  // Metodos o funciones

//Guardar(enviar)

function valCampos(){

  if(identificacion === "" || nombres === "" || asignatura === "" || nota1 === "" || nota2 === "" || nota3 === ""){
    return false
  }else{
    return true
  } 
}

function valValores(){
  let n1 = parseFloat(nota1)
  let n2 = parseFloat(nota2)
  let n3 = parseFloat(nota3)
  
  if(n1 >= 0 && n1 <= 5){
    if(n2 >= 0 && n2 <= 5){
      if(n3 >= 0 && n3 <= 5){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }else{
    return false
  }
}

  let calcular = () =>{
    let ob = ''
    let resValCam = valCampos()
    let resValVal = valValores()
    let resultado = (parseFloat(nota1) * 0.3) + (parseFloat(nota2) * 0.35) + (parseFloat(nota3) * 0.35)
    if(resValCam){
      if(resValVal){
        setEsValido(true);
        setMensaje('')
        if(resultado < 2){
          setDefinitiva(resultado);
          setObservacion('El estudiantte reprueba');
          ob = 'Reprueba'
        }else if(resultado >= 2 && resultado < 3){
          setDefinitiva(resultado);
          setObservacion('El estudiante habilita');
          setEsValido(false)
          ob = 'El estudinte aprueba'
        }else if(resultado >= 3 && resultado <= 5){
          setDefinitiva(resultado);
          setObservacion('Aprueba');
          ob = 'Aprueba'
        }
        setEsValido(true)
        setMensaje('Estudiante Ingresado')
        notas.push({identificacion:identificacion,nombres:nombres,asignatura:asignatura,nota1:nota1,nota2:nota2,nota3:nota3,definitiva:resultado.toString(),observacion:ob})
        console.log(notas)
      }else{
        setEsValido(false);
        setMensaje('Se deben ingresar notas entre 0 y 5')
      }
    }else{
      setEsValido(false)
      setMensaje('Se deben ingresar todos los campos')
    }
  }

    let limpiar = () =>{
      setIdentificacion('')
      setNombres('')
      setAsignatura('')
      setNota1('')
      setNota2('')
      setNota3('')
      setDefinitiva('')
      setObservacion('')
      setMensaje('')
    }

    let buscarAlumno = () =>{
      let ident = identificacion
      const notaFind = notas.find(idFind => idFind.identificacion === ident)
      if(ident === ""){
        setEsValido(false)
        setMensaje('Ingresa una identificacion')
      }else{
        if(notaFind != undefined){
          //console.log(notaFind)
          setNombres(notaFind.nombres)
          setAsignatura(notaFind.asignatura)
          setNota1(notaFind.nota1)
          setNota2(notaFind.nota2)
          setNota3(notaFind.nota3)
          setDefinitiva(notaFind.definitiva)
        }else{
          setEsValido(false)
          setMensaje('No existe identificacion')
        }
      }
    
    }



  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CESDE</Text>
      <Text style={styles.subTitle}>Sistema de Notas</Text>
      <TextInput
        placeholder='Identificación:'
        style={styles.textInput}
        onChangeText={(identificacion)=> setIdentificacion(identificacion)}
        value={identificacion}
      />
      <TextInput
        placeholder='Nombres:'
        style={styles.textInput}
        onChangeText={(nombres)=> setNombres(nombres)}
        value={nombres}
      />
      <TextInput
        placeholder='Asignatura:'
        style={styles.textInput}
        onChangeText={(asignatura)=> setAsignatura(asignatura)}
        value={asignatura}
      />
      <TextInput
        placeholder='Nota 1 (30%):'
        style={styles.textInput}
        onChangeText={(nota1)=> setNota1(nota1)}
        value={nota1}
      />
      <TextInput
        placeholder='Nota 2 (35%):'
        style={styles.textInput}
        onChangeText={(nota2)=> setNota2(nota2)}
        value={nota2}
      />
      <TextInput
        placeholder='Nota 3 (35%):'
        style={styles.textInput}
        onChangeText={(nota3)=> setNota3(nota3)}
        value={nota3}
      />
      <TextInput
        placeholder='Definitiva:'
        editable={false}      
        style={styles.textInput}
        onChangeText={(definitiva) => setDefinitiva(definitiva)}
        value={definitiva}
      />
      <TextInput
        placeholder='Observación:'
        editable={false}
        style={styles.textInput}
        onChangeText={(observacion) => setObservacion(observacion)}
        value={observacion}
      />
      <Text style={styles.textMessage}>{mensaje}</Text>


      <View style={[styles.container, {marginTop: 30, flexDirection: "row"}]}
      >    
        <TouchableOpacity
            style={[{ backgroundColor: "green" }, styles.buttons]}
            onPress= {() => calcular()}
        >
          <Text style={styles.textButtons}>GUARDAR</Text>

        </TouchableOpacity>  
        <TouchableOpacity
            style={[{ backgroundColor: "green" }, styles.buttons]}
            onPress={() => limpiar()}
        >
          <Text style={styles.textButtons}>LIMPIAR</Text>
          
        </TouchableOpacity>
        
      </View>
      <View style={[styles.container, {marginTop: 20, flexDirection: "row"}]}
      >    
        <TouchableOpacity
            style={[{ backgroundColor: "green" }, styles.buttons]}
            onPress={() => buscarAlumno()}
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