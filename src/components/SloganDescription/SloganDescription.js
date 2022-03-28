import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import MaterialCommunityIcon from "react-native-vector-icons/Ionicons";

export default function SloganDescription(){
    return(
        <View style={{marginTop:10,padding:5,backgroundColor:"white"}}>
            <>
            <Image source={Logo} style={{width:'100%',height:275}}/>
                <TouchableOpacity style={{position:'absolute',right:20,top:20}}>
                    <MaterialCommunityIcon name={'heart-outline'} color={'#fff'} size={40}/>
                </TouchableOpacity>
            </>
            <SloganInfo/>

        </View>
    )
};
const SloganInfo=()=>(
    <View style={{marginTop:10}}>
        <Text style={{fontSize:15,fontWeight:'bold', color:'black'}}>Welcome to Sinhala and English Slogan
            Generator..!!!</Text>
        <Text  style={{fontSize:13, color:'grey',marginTop:5}}>You can generate or custom made creative English
            and Sinhala slogans.
            The user can come up with their creative slogan and submit it to us.For a custom made slogan use the
            "Contact Us" button</Text>
    </View>
)

