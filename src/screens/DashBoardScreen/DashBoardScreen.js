import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import HeaderTabs from '../../components/HeaderTaps/HeaderTabs';
import SearchBar from '../../components/SearchBar/SearchBar';
import Categories from '../../components/Categories/Categories';
import SloganDescription from '../../components/SloganDescription/SloganDescription';
import FAButton from '../../components/FAButton/FAButton';
import BottomTabs from '../../components/BottomTabs/BottomTabs';
import {Divider} from 'react-native-elements';
const DashBoardScreen =() =>{
const [data,setData] = useState('');

    return (

        <SafeAreaView style={{backgroundColor:'#cbd5e0',flex:1}}>
        <View style={styles.root}>
            <HeaderTabs/>
            <SearchBar data={data} onChangeValue={(newValue)=>setData(newValue)}
                       onValueSubmitted={()=> alert(data)}/>
            {/* Way to get the props */}
        </View>

            <ScrollView showsVerticalScrollIndicator={false}>
            <Categories/>
                <SloganDescription/>
                <SloganDescription/>
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    root:{
       backgroundColor:'#ff9800',
        padding:15
    },

});
export default DashBoardScreen;
