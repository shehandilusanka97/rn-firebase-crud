import React from 'react';
import {View, SafeAreaView, Image, StyleSheet, Text} from 'react-native';
import JoinUs from '../../../assets/images/joinwithus.png'
import CustomInput from '../../components/CustomInput';
import {useForm} from 'react-hook-form';
import { Button } from 'react-native-paper';

const JoinWithUs=() =>{
    const {control,handleSubmit}=useForm();
    const EMAIL_REGEX=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const onSubmitPressed  = () => {
        console.log('pressed');
    }
    return(
      <SafeAreaView style={{backgroundColor:'#ff9800',flex:1}}>
          <View style={{alignItems:'center',backgroundColor:'#ff9800', padding:15}}>
              <Image source={JoinUs} style={styles.logo}/>
              <Text style={{fontWeight:'bold',fontSize:30,color:'black',padding:10}}>Join us</Text>

              <CustomInput name={'Name'} control={control} placeholder="Enter your name"
                           rules={{required:'Name is required',
                               minLength:{value: 4,message:'Name should be minimum 4 characters long'}}}/>

              <CustomInput name={'Email'} control={control} placeholder="Enter your email"
                           rules={{pattern: {value:EMAIL_REGEX,message: 'Email is invalid'},
                               required:'Email is required'}}/>
              <CustomInput name={'Submit_Slogan'} control={control} placeholder="Enter your custom made slogan"
                           rules={{required:'Slogan is required',
                               minLength:{value: 4,message:'Name should be minimum 4 characters long'}}}/>

              <Button style={{marginVertical:10,}}  mode="contained" onPress={handleSubmit(onSubmitPressed)}>
                  Submit
              </Button>

          </View>
      </SafeAreaView>
    )
}
export default JoinWithUs;
const styles = StyleSheet.create({
    logo:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:25,
         width:350,
        height:200,

    },
})
