import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


import Shoes from '../Shoes';


export default function Footer() {
    return (
        <View>
            <Text style={styles.title}>INDICADO PARA VOCÊ:</Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsVerticalScrollIndicator={false}>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/tenisNike2.jpg')} const="900,00">
                        TÊNIS NIKE AIR MAX 97 MASCULINO
                        </Shoes>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/tenisNike3.jpg')} const="850,00">
                        TÊNIS NIKE AIR MAX 97 MASCULINO
                        </Shoes>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/tenisNike5.jpg')} const="750,00">
                        TÊNIS NIKE AIR MAX 97 MASCULINO
                        </Shoes>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/tenisNike7.jpg')} const="650,00">
                        TÊNIS NIKE AIR MAX 97 MASCULINO
                        </Shoes>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})