import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button, TouchableOpacity, Keyboard } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [displayText, setDisplayText] = useState('');



  const calculateBmi = () => {
    Keyboard.dismiss();
     
    const heightInMeters = parseFloat(height) / 100; // Convert height to meters
    const weightInKg = parseFloat(weight);

    if (heightInMeters <= 0 || weightInKg <= 0) {
      alert('Please enter valid height and weight.');
      return;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    if(bmi.toFixed(1)!== 'NaN'){
      setBmi(bmi.toFixed(1));
    }else{
      alert("all fields are mandatory");
    }
    
    setHeight(''); // Clear height input
    setWeight(''); 


  }
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>BMI Calculator</Text>
      <TextInput 
      style={styles.input}
      placeholder='Enter your height in Centimeter'
      value={height} 
      keyboardType='numeric'
      onChangeText={(height)=>{
        setHeight(height);
        setBmi("");
      }} 
      >

      </TextInput>
      <TextInput 
      style={styles.input} 
      value={weight} 
      keyboardType='numeric'
      onChangeText={(weight)=>{
        setWeight(weight);
        setBmi("");
      }
      } 
      placeholder='Enter your weight in Kg'>

      </TextInput>
      <TouchableOpacity
      style={styles.calculateButton}
      onPress={calculateBmi}
      >
    <Text style={styles.buttonText}>Calculate</Text>

      </TouchableOpacity>
      { bmi ? <Text style={styles.resultText}>Your BMI is:{bmi} 
      </Text>
     : <Text></Text>}
      
      
      
      

      
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

  headline: {
   
    backgroundColor:'#2c6979',
    fontSize:30,
    padding:20,
    marginBottom:20,
    color:'white',
    borderRadius:20
  },
  input: {
    padding:20,
    margin:20,
    width: '80%',
    borderWidth:2,
    borderColor:'blue',
    borderRadius:10,
   
    
  },
  calculateButton:{
    borderRadius:20,
    backgroundColor:"#2c6979",
    margin:10
    

  },
  buttonText:{
    padding:20,
    color:'white',
    fontSize:30,
    
  },
  resultText:{
    fontSize: 30,

  }
});
