import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';


const NewPasswordScreen = () => {
    const navigation= useNavigation();
    const {control,handleSubmit}=useForm();


    const onSubmitPressed=async (data) => {
        try {
            await Auth.forgotPasswordSubmit(data.username,data.code,data.password);
            navigation.navigate('SignIn');
        } catch (e) {
            Alert.alert("Oops", e.message);
        }
    }
    const onSignInPress=()=>{
        navigation.navigate('SignIn');
    }

    return(

        <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>
            <CustomInput name={'username'} control={control} placeholder="Username" rules={{required:'Username is required'}} />
            <CustomInput name={'code'} control={control} placeholder="Code" rules={{required:'Code is required'}} />
            <CustomInput name={'password'} control={control} placeholder="Enter your new password" secureTextEntry
                         rules={{required:'Password is required',minLength:{value:8,
                                 message:"Password should be at least 8 characters long"}}} />
            <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)}/>
            <CustomButton text="Back to Sign in" onPress={onSignInPress} type={"TERTIARY"}/>


        </View>
    )
};
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#ff9800',
        alignItems: 'center',
        padding:20,

    },
    title:{
        fontSize:27,
        fontWeight:'bold',
        color:'#34495E',
        margin:10,
    },
    text:{
     color:'#34495E',
        fontSize: 15,
        fontWeight:'bold',
        marginVertical:10,

    },

});
export default NewPasswordScreen
