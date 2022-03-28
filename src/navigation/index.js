import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import DashBoardScreen from '../screens/DashBoardScreen/DashBoardScreen';

const Stack = createNativeStackNavigator();
const Navigation=()=>{
    return(
        <>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>

                    <Stack.Screen name="SignIn" component={SignInScreen}/>
                    <Stack.Screen name="SignUp" component={SignUpScreen}/>
                    <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
                    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
                    <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
                    <Stack.Screen name="DashBoardScreen" component={DashBoardScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}
export default Navigation;
