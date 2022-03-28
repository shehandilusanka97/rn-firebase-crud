import React,{useState} from 'react';
import {View, Image, StyleSheet, useWindowDimensions, Alert} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify'


const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const {control, handleSubmit, formState: {}} = useForm();
    const onSignInPress = async (data) => {
        if (loading) {
            return;
        }
        setLoading(true);
        try {
           await Auth.signIn(data.username, data.password);
            navigation.navigate('DashBoardScreen');
        } catch (e) {
            Alert.alert('Oops', e.message)
        }
        setLoading(false)};
        const onForgotPasswordPress = () => {
            navigation.navigate('ForgotPassword');
        }

        const onSignUpPress = () => {
            navigation.navigate('SignUp');
        }

        return (

                <View style={styles.root}>
                    <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode={'contain'}/>


                    <CustomInput name={'username'} placeholder="Username" control={control}
                                 rules={{required: 'Username is required'}}/>
                    <CustomInput name={'password'} placeholder="Password" secureTextEntry control={control}
                                 rules={{
                                     required: 'Password is required',
                                     minLength: {value: 4, message: 'Password should be minimum 4 characters long'}
                                 }}/>


                    <CustomButton text={'Sign In'} onPress={handleSubmit(onSignInPress)}/>
                    <CustomButton text='Forgot password?' onPress={onForgotPasswordPress} type={"TERTIARY"}/>
                    {/*<SocialSignInButtons/>*/}
                    <CustomButton text="Don't have an accout? Create one" onPress={onSignUpPress} type={"TERTIARY"}/>

                </View>
        );
    }
    const styles = StyleSheet.create({
        root: {
            flex: 1,
            backgroundColor: '#ff9800',
            alignItems: 'center',
            padding:20,

        },
        logo: {
            width: '120%',
            maxWidth: 400,
            maxHeight: 300,
        },

    });

export default SignInScreen;
