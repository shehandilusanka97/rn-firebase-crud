import {Text, View,StyleSheet,TextInput} from 'react-native';
import React from 'react';
import { NativeBaseProvider, Input,Button } from "native-base";


const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={{fontSize:25,color:'white',fontWeight:'bold',marginTop:4}}>React native with firebase curd</Text>
           
            <NativeBaseProvider>
            <Input  placeholder="Name" mt={5} justifyContent={'center'} w="100%" maxWidth="400px" />
            <Input  placeholder="Email" mt={5} justifyContent={'center'} w="100%" maxWidth="400px" />
            <Input  placeholder="Message" mt={5} justifyContent={'center'} w="100%" maxWidth="400px" />
     
            <Button size="sm" mt={6}>Submit</Button>
            </NativeBaseProvider>
            <Text style={{marginLeft:100,marginBottom:10, color:'white', fontSize:20}}>Thank you..!!!</Text>
        </View>
    
    )};
    

export default HomeScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:44,
    
    },
  });