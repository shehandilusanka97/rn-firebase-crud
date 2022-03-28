import React from 'react';
import { View,TextInput,StyleSheet} from 'react-native';
import { Searchbar } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


 const SearchBar=({onValueSubmitted,data,onChangeValue})=>{
    return (
            <View style={Styles.ViewStyle}>
                <FontAwesome5 style={Styles.iconStyle} name={'search'}/>
              <TextInput style={Styles.textInputStyle} placeholder={'Search'} placeholderTextColor={'#000'}
              onChangeText={(newChange)=>onChangeValue(newChange)}
                         onSubmitEditing={(subValue
              )=>onValueSubmitted(subValue)}/>
            </View>
    )};

const Styles= StyleSheet.create({
    ViewStyle:{
        marginTop:10,
        backgroundColor:'white',
        flexDirection:'row',
        borderRadius:15,
        marginHorizontal:1,
    },
    textInputStyle:{
        flex:1,
        fontSize:18,

    },
    iconStyle:{
        fontSize:20,
     alignSelf:'center',
       color:'black',
        marginHorizontal:12,

    }
})
export default SearchBar;
