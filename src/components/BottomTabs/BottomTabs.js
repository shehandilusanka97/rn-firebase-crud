import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs(){
    return(
        <View style={{flexDirection:'row',margin:10, marginHorizontal:30, justifyContent:'space-between'}}>
            <Icon icon='home' text={"Home"}/>
            <Icon icon='heart' text={"Join us"}/>
            <Icon icon='user' text={"Contact us"}/>
            <Icon icon='arrow-left' text={"Sign out"}/>

        </View>
    )
}
const Icon=(props)=>(
    <TouchableOpacity>
    <View>
    <FontAwesome5 name={props.icon} size={25} style={{marginBottom:3, alignSelf:'center'}}/>
        <Text style={{fontSize:12}}>{props.text}</Text>
    </View>
    </TouchableOpacity>
);
