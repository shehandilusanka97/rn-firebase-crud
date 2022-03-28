import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs() {
    const [activeTab,setActiveTab]=useState('English');
    return (
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton text='English' btnColor='black' textColor='#ff9800' activeTab={activeTab}
                          setActiveTab={setActiveTab} />
            <HeaderButton text='සිංහල' btnColor='#ff9800' textColor='black' activeTab={activeTab}
                          setActiveTab={setActiveTab} />

        </View>
    );
}

const HeaderButton = (props) => (
    <TouchableOpacity style={{backgroundColor:props.activeTab===props.text ? 'black':'#ff9800',
        paddingVertical:6,paddingHorizontal:22,borderRadius:30}}
    onPress={()=>props.setActiveTab(props.text)}>
        <Text style={{color:props.activeTab===props.text ? '#ff9800':'black',fontSize:15, fontWeight:'900'}}>{props.text}</Text>
    </TouchableOpacity>
);
