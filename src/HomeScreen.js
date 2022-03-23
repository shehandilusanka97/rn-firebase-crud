import {Text, View,StyleSheet} from 'react-native';
import { useState } from 'react';
import { NativeBaseProvider, Input,Button } from "native-base";
import {db} from './Config'
import { doc, getDoc, setDoc, } from 'firebase/firestore';

const HomeScreen = () => {
    //Store data
    const [userDoc, setUserDoc] = useState(null);
      // Update Text
  const [text, setText] = useState("");
    //Crud functions
    const Create =()=>{
        const myDoc=doc(db,'MyCollection','MyDocument')
        const docData={
           'Name':'Shehan',
           'Email':'shehan@gmail.com',
           'Message':'Yo guys' 
        }

        setDoc(myDoc,docData)
        .then(()=>{
           alert('Document Created') 
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
    const Read =()=>{
    const myDoc=doc(db,'MyCollection','MyDocument')  
    getDoc(myDoc)
      .then((snapshot) => {
        // MARK: Success
        if (snapshot.exists) {
          setUserDoc(snapshot.data())
        }
        else {
          alert("No Doc Found")
        }
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    }
    const Update = (value, merge) => {
         // MARK: Updating Doc
         const myDoc=doc(db,'MyCollection','MyDocument')
    setDoc(myDoc, value, { merge: merge })
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Updated Successfully!")
        setText("")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })
  }
    
    const Delete =()=>{
        // MARK: Deleting Doc
    const myDoc = doc(db, "MyCollection", "MyDocument")

    deleteDoc(myDoc)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Deleted Successfully!")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })
      
    }

    return(
        <View style={styles.container}>
            <Text style={{fontSize:25,color:'white',fontWeight:'bold',marginTop:4}}>React native with firebase curd</Text>
           
            <NativeBaseProvider>
            <Input  placeholder="Name" mt={5} justifyContent={'center'} w="100%" maxWidth="400px" />
            <Input  placeholder="Email" mt={5} justifyContent={'center'} w="100%" maxWidth="400px" />
            <Input  placeholder="Message" mt={5} justifyContent={'center'} w="100%" maxWidth="400px" />
            <Button size="sm" onPress={Create} mt={6}>Create</Button>
            <Button size="sm" onPress={Read} mt={6}>Read Doc</Button>
            {
        userDoc != null &&
        <Text style={{color:'white',fontSize:20}}>Name : {userDoc.Name}</Text>
      }
       <Input  placeholder="Type Here" mt={5} onPress justifyContent={'center'} w="100%" maxWidth="400px" />
       <Button size="sm"  mt={6}>Update</Button>
       <Button title='Delete Doc' onPress={Delete}></Button>
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