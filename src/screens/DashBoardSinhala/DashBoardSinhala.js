import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import HeaderTabs from '../../components/HeaderTaps/HeaderTabs';
import SinhalaCategories from '../../components/SinhalaCategories/SinhalaCategories';
import SinhalaSearchBar from '../../components/SearchBar/SinhalaSearchBar';
import SinhalaSloganDescription from '../../components/SinhalaSloganDescription/SinhalaSloganDescription'
import {Divider} from 'react-native-elements';
import BottomTabs from '../../components/BottomTabs/BottomTabs';
import SinhalaBottomTabs from '../../components/BottomTabs/SinhalaBottomTabs';

const DashBoardSinhala=() =>{
    const [data,setData] = useState('');
    return(
        <SafeAreaView style={{backgroundColor:'#cbd5e0',flex:1}}>
            <View style={styles.root}>
                <HeaderTabs/>
                <SinhalaSearchBar data={data} onChangeValue={(newValue)=>setData(newValue)}
                           onValueSubmitted={()=> alert(data)}/>
                {/* Way to get the props */}

            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <SinhalaCategories/>
                <SinhalaSloganDescription/>

            </ScrollView>
            <Divider width={1}/>
            <SinhalaBottomTabs/>
        </SafeAreaView>
    )
}
export default DashBoardSinhala;
const styles = StyleSheet.create({
    root:{
        backgroundColor:'#ff9800',
        padding:15
    },

});
