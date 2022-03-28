import * as React from 'react';
import {View, Image, StyleSheet, Text, SafeAreaView,TextInput} from 'react-native';
import ContactUs from '../../../assets/images/customcare.png'
import {Button } from 'react-native-paper';
import { useState,useEffect} from 'react';
import {db} from '../../firebase-config'
import {collection,onSnapshot,doc,addDoc} from 'firebase/firestore';

const ContactUsScreen= () =>{

    const [contact,setContact]=useState([])
    const [form,setForm]= useState({
        name:'',
        email:'',
        message:""
    })
    const contactDetailRef= collection(db,'contact')

    useEffect(()=>{
        onSnapshot(contactDetailRef,snapshot =>{
         setContact(snapshot.docs.map(doc =>{
             return{
                 id:doc.id,
                 viewing:false,
                 ...doc.data()
             }
         }))
        } )
    })
    const submitOnPress =e=>{
        if (
            !form.name||
            !form.email||
            !form.message
        ){
            alert("Please fill out all fields")
            return
        }
        addDoc(contactDetailRef,form)
        setForm({
            name:'',
            email:"",
            message:''
        })
    }

    return(
        <SafeAreaView style={{backgroundColor:'#ff9800',flex:1}}>
        <View style={{alignItems:'center',backgroundColor:'#ff9800', padding:15}}>
            <Image source={ContactUs} style={styles.logo}/>
            <Text style={{fontWeight:'bold',fontSize:30,color:'black',padding:10}}>Contact us</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={form.name}

            />
            <TextInput
                style={styles.input}
                placeholder="Email"

            />
            <TextInput
                style={styles.input}
                placeholder="Message"

            />

            <Button style={{marginVertical:10}}
                mode="contained"  onPress={submitOnPress} icon="send">
              Send
            </Button>

        </View>
        </SafeAreaView>

    )
};
const styles = StyleSheet.create({
    logo:{
      justifyContent:'center',
      alignItems:'center',
        paddingTop:15,

    },input: {
        backgroundColor:'white',
        width:'100%',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:5,
    },
})
export default ContactUsScreen;
