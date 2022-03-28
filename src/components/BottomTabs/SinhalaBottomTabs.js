import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SinhalaBottomTabs(){
    return(
        <View style={{flexDirection:'row',margin:10, marginHorizontal:30, justifyContent:'space-between'}}>
            <Icon icon='home' text={"මුල් පිටුව"}/>
            <Icon icon='heart' text={"සම්බන්ධවීම"}/>
            <Icon icon='user' text={"අප අමතන්න"}/>
            <Icon icon='arrow-left' text={"ඉවත්වීමට"}/>

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
