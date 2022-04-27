import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, TouchableOpacity, Pressable } from 'react-native';
import { Modal } from 'react-native';

export default function App() {
  const[lang, Setlang]= useState('')
  const[submitted, setSubmitted] = useState(false)
  const[showingWarning, setShowingWarning]= useState(false)
  const onClickHandler=()=>{
    if(lang.length > 3){
      setSubmitted(!submitted)
    }else{
      setShowingWarning(true)
    }
      
  }
  return (
    <View style={styles.container}>
      <Modal
      visible={showingWarning}
        onRequestClose ={()=>setShowingWarning(false)}
      >
        <View style={styles.modal}>
        <View style={styles.viewModal}>
          <View>
          <Text style={styles.text1}>Warning!!</Text>
          </View>
        <Text style={styles.text2}>You have entered wrong input</Text>
        <Pressable
        onPress={()=> setShowingWarning(false)}
        >
          <Text style={styles.text3}> Ok</Text>
        </Pressable>
        </View>
        </View>
      </Modal>
     <Text style={styles.text}>Which language are you comfortable with?</Text>
      <TextInput
      style={styles.textInput}
      onChangeText={(value)=>Setlang(value)}
      placeholder='e.g Kotlin, JavaScript'
      />
      <Text>Your preferred language is: {lang}</Text>
      <TouchableOpacity
      style={styles.touchableButtton}
      onPress={onClickHandler}
      >
        <Text>{submitted ? 'submit' : 'clear'}</Text>
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    width: 200,
    borderWidth:1,
    textAlign: 'center', 
    marginBottom: 10
  },
  text:{
    margin:20,
  },
  touchableButtton:{
    backgroundColor:'#08F',
    borderRadius: 5,
    margin: 20,
    width: 50,
    alignItems:'center',
  },
  viewModal:{
    width:200,
    height:200,
    alignItems:'center', 
    backgroundColor:"#ff0",
    borderRadius:10,
    borderWidth:1
  },
  modal:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',   
  },
  text2:{
    textAlign:'center',
  },
  text1:{
    marginBottom:20,
    backgroundColor:'#fff',
    width:200,
    height:30,
    borderTopRightRadius:2,
    borderTopLeftRadius:2,
    textAlign:'center'
  },

  text3:{
    marginTop: 80,
    backgroundColor:'#00ff00',
    width:200,
    textAlign:'center',
    borderRadius:10,
    height:30

  }
});
