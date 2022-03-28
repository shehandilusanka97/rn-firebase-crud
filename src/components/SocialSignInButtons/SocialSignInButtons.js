import {View} from 'react-native';
import CustomButton from '../CustomButton';
import React from 'react';


const SocialSignInButtons =()=>{

    const onSignInGoogle=()=>{
        console.warn(" Google")
    }
    const onSignInFacebook=()=>{
        console.warn(" Facebook")
    }
    return(
        <>
            <CustomButton text='Sign In with Facebook' onPress={onSignInFacebook} bgColor={"#F7EAF4"} fgColor={"#4765A9"}/>
            <CustomButton text='Sign In with Google' onPress={onSignInGoogle}bgColor={"#FAE9EA"}fgColor={"#DD4D44"}/>
        </>

    )
};
export default SocialSignInButtons
