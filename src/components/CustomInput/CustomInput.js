import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Controller} from 'react-hook-form';



const CustomInput=({control,name,rules={},placeholder, secureTextEntry})=>{
    return(
        <Controller
                control={control} name={name}
                rules={rules}
                render={({field:
                    {value,onChange,onBlur},
                             fieldState:{error}})=>(
<>
                    <View style={[styles.container,{borderColor:error?'red':'#e8e8e8'}]}>
                    <TextInput value={value} onChangeText={onChange} onBlur={onBlur} placeholder={placeholder}
                               secureTextEntry={secureTextEntry} style={styles.input}
                    />
                        </View>
        {error &&(<Text style={{color:'#752d1d',alignSelf:'stretch'}}>{error.message||'Error'}</Text>)}
</>

                )}
            />

    );

}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'100%',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:5,
    },
    input:{},
});
export default CustomInput
