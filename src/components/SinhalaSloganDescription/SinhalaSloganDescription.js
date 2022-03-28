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
        <Text style={{fontSize:15,fontWeight:'bold', color:'black'}}>සිංහල සහ ඉංග්‍රීසි සටන් පාඨ උත්පාදකට යන්ත්රය
            සාදරයෙන් පිළිගනිමු..!!!</Text>
        <Text  style={{fontSize:13, color:'grey',marginTop:5}}>ඔබට නිර්මාණාත්මක සිංහල සහ ඉංග්‍රීසි සටන් පාඨ ස්වංක්‍රීයව උත්පාදනය කර
            හෝ සකසන ලද සටන් පාඨ මෙහිදී ලබාගත හැක.
            පරිශීලකයාට ඔවුන්ගේ නිර්මාණාත්මක සටන් පාඨ අප වෙත ඉදිරිපත් කළ හැකිය.එය සදහා පහතින් ඇති
            "අප අමතන්න" බොත්තම ක්ලික් කරන්න.</Text>
    </View>
)

