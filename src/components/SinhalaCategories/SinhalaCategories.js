import React from 'react';
import {View, Text, Image,ScrollView} from 'react-native';
import Doctor from '../../../assets/icons/doctor.png';
import Engineer from '../../../assets/icons/engineer.png';
import Gym from '../../../assets/icons/gym.png';
import Businessman from '../../../assets/icons/businessman.png';
import Gamer from '../../../assets/icons/gamer.png';
import Programmer from '../../../assets/icons/programmer.png';

const items = [{
    image: (Doctor), text: 'වෛද්‍යවරයා',
}, {
    image: (Engineer), text: 'ඉංජිනේරු',
},{
    image: (Gamer), text: 'ක්‍රීඩකයා',
}, {
    image: (Programmer), text: 'වැඩසටහන්කරු',
}, {
    image: (Gym), text: 'කායවර්ධන',
}, {
    image: (Businessman), text: 'ව්යාපාරිකයා',
},
];

export default function SinhalaCategories() {
    return (
        <View
            style={{
                marginTop: 10,
                backgroundColor: "#fff",
                paddingVertical: 10,
                paddingLeft: 20,
            }}
        >
            <Text style={{ fontSize: 15, fontWeight: "900",color:'black' }}>#සටන් පාඨ වර්ග</Text>
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
