import React from 'react';
import {View, Text, Image,ScrollView} from 'react-native';
import Doctor from '../../../assets/icons/doctor.png';
import Engineer from '../../../assets/icons/engineer.png';
import Gym from '../../../assets/icons/gym.png';
import Businessman from '../../../assets/icons/businessman.png';
import Gamer from '../../../assets/icons/gamer.png';
import Programmer from '../../../assets/icons/programmer.png';

const items = [{
    image: (Doctor), text: 'Doctor',
}, {
    image: (Engineer), text: 'Engineer',
},{
    image: (Gamer), text: 'Gamer',
}, {
    image: (Programmer), text: 'Programmer',
}, {
    image: (Gym), text: 'Gym',
}, {
    image: (Businessman), text: 'Businessman',
},
];

export default function Categories() {
    return (
        <View
            style={{
                marginTop: 10,
                backgroundColor: "#fff",
                paddingVertical: 10,
                paddingLeft: 20,
            }}
        >
            <Text style={{ fontSize: 15, fontWeight: "900",color:'black' }}>#Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
                        <Image
                            source={item.image}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: "contain",
                                marginTop:7,
                            }}
                        />
                        <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
