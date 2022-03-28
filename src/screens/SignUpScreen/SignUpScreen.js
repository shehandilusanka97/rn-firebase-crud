import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const EMAIL_REGEX=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignInScreen = () => {

    const {control,handleSubmit,watch}=useForm();
    const pwd=watch('password');
     const navigation= useNavigation();

    const onRegisterPressed=async (data) => {
        const {username,password,email,name} = data;
        try {
             await Auth.signUp({
                username,password,attributes:{email,name,preferred_username:username}

            }
            )
            navigation.navigate('ConfirmEmail',{username});

        } catch (e) {
            Alert.alert("Oops", e.message);
        }
        //  navigation.navigate('ConfirmEmail');
    }
    const onSignInPress=()=>{
        navigation.navigate('SignIn');
    }
    return(

        <View style={styles.root}>
            <Text style={styles.title}>Create an Account</Text>
            <CustomInput name={'name'}  control={control} placeholder="Name" rules={{required:'Name is required',
                minLength:{value: 3,message:'Name should be minimum 3 characters long'},
                maxLength:{value: 24,message:'Name should be minimum 24 characters long'}}}/>

            <CustomInput name={'username'}  control={control} placeholder="Username" rules={{required:'Username is required',
                minLength:{value: 3,message:'Username should be minimum 3 characters long'},
                maxLength:{value: 24,message:'Username should be minimum 24 characters long'}}}/>
            <CustomInput name={'email'}  control={control} placeholder="Email"rules=
                {{pattern: {value:EMAIL_REGEX,message:'Email is invalid'},required:'Email is required'}}/>
            <CustomInput name={'password'}  control={control} placeholder="Password" secureTextEntry
                         rules={{required:'Password is required',
                minLength:{value: 8,message:'Password should be minimum 8 characters long'}}}/>

            <CustomInput name={'repeat-password'}  control={control} placeholder="Repeat Password" secureTextEntry
            rules={{validate:value=> value === pwd||'Password do not match'}}
            />

            <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)}/>

            <Text style={styles.text}>By registering, you confirm that you accept our
                Terms of Use andPrivacy Policy</Text>
            <CustomButton text="Have an account? Sign in" onPress={onSignInPress} type={"TERTIARY"}/>


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
export default SignInScreen
