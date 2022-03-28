import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';


const ConfirmEmailScreen = () => {
     const route = useRoute();
     const {control, handleSubmit,watch}= useForm({defaultValues:{username:route?.params?.username},
     });
     const username= watch('username');
     const navigation =useNavigation();

    const onConfirm=async (data) => {
        try {
            await Auth.confirmSignUp(data.username, data.code);
            navigation.navigate('SignIn');
        } catch (e) {
            Alert.alert("Oops", e.message);
        }
    }
    const onSignInPress=()=>{
        navigation.navigate('SignIn');
    }
    const onResendPress=async () => {
        try {
            await Auth.resendSignUp(username);
            Alert.alert('Success','Code was resent to your email');
        } catch (e) {
            Alert.alert("Oops", e.message);
        }
    }
    return(

        <View style={styles.root}>
            <Text style={styles.title}>Confirm your email</Text>

            <CustomInput name={'username'} control={control} placeholder="Username"
                         rules={{
                             required:'Username code is required'
                         }}
            />
            <CustomInput name={'code'} control={control} placeholder="Enter your confirmation code"
            rules={{
                required:'Confirmation code is required'
            }}
            />
            <CustomButton text="Confirm" onPress={handleSubmit(onConfirm)}/>

            <CustomButton text="Resend code" onPress={onResendPress} type={"SECONDARY"}/>
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
export default ConfirmEmailScreen
