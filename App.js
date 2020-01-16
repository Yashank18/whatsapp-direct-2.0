import React from 'react';
import { StyleSheet, Text, View, Keyboard, Alert, Linking } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


export default function App() {

  const [number , setNumber ] = React.useState("");

  const [message , setMessage ] = React.useState("");

  const handleMessage = e  =>{
      setMessage(e);
  }

  const handleNumber = e =>{
      setNumber(e);
  }

  const sendMessage = () =>{
    Keyboard.dismiss();
    Linking.openURL('whatsapp://send?text=' +message+ '&phone=91' + number )
  }

  return (
    <View style={styles.container}>
      <TextInput style={{width : 300 , height : 50 , marginBottom : 15 }} mode="outlined" label="Enter Number Here" keyboardType="number-pad" returnKeyType="next" onChangeText={handleNumber}  />
      <TextInput style={{width : 300 , height : 50 , marginBottom : 15 }} mode="outlined" label="Enter Message Here" keyboardType="default" returnKeyType="done" onChangeText={handleMessage  }  onSubmitEditing={sendMessage}/>
      <Button icon="send" onPress={sendMessage} mode="contained">
        Send 
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent : "center"
  },
});
