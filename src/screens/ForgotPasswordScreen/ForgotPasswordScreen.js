import {StyleSheet, Text, View, ScrollView,Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const ForgotPasswordScreen = () => {
    const {control,handleSubmit}=useForm();
    const navigation= useNavigation();

    const onSendPressed=async (data) => {
        try {
            await Auth.forgotPassword(data.username);
            navigation.navigate('NewPassword');
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
            <CustomInput name={'username'} control={control} placeholder="Username" rules={{required:'Username is required'}}/>
            <CustomButton text="Send" onPress={handleSubmit(onSendPressed)}/>
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
export default ForgotPasswordScreen
