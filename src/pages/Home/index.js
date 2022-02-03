import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import Shoes from '../../component/Shoes';


export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/logoNike.png')}
                    style={styles.image}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>TÊNIS</Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}>•</Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}>MASCULINO</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                        <MaterialIcons
                            name="filter-list"
                            size={24}
                            color='#000'
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />

                <ScrollView>
                    {/*1-FLEX*/}
                    <Text style={styles.text}>LANÇAMENTO</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Shoes img={require('../../assets/tenisNike1.jpg')} const="R$350,00" onClick={() => navigation.navigate('Detail')}>
                            Tênis Nike Air Vapormax Flyknit 3 Masculino
                        </Shoes>
                        <Shoes img={require('../../assets/tenisNike2.jpg')} const="R$550,00" onClick={() => navigation.navigate('Detail')}>
                            TÊNIS NIKE AIR MAX 97 MASCULINO
                        </Shoes>
                    </View>
                    {/*2-FLEX*/}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Shoes img={require('../../assets/tenisNike3.jpg')} const="R$350,00" onClick={() => alert('CLICOU')}>
                            TÊNIS NIKE AIR MAX 97 MASCULINO
                        </Shoes>
                        <Shoes img={require('../../assets/tenisNike4.jpg')} const="R$550,00" onClick={() => alert('CLICOU')}>
                            Tênis Nike Shox R4 - Masculino
                        </Shoes>
                    </View>
                    {/*3-FLEX*/}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Shoes img={require('../../assets/tenisNike5.jpg')} const="R$350,00" onClick={() => alert('CLICOU')}>
                            Tenis Nike Air Force 1
                        </Shoes>
                        <Shoes img={require('../../assets/tenisNike6.jpg')} const="R$550,00" onClick={() => alert('CLICOU')}>
                            Tenis Nike Air Force 1
                        </Shoes>
                    </View>
                    {/*4-FLEX*/}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Shoes img={require('../../assets/tenisNike7.jpg')} const="R$350,00" onClick={() => alert('CLICOU')}>
                            Tenis Nike Air Force 1
                        </Shoes>
                        <Shoes img={require('../../assets/tenisNike8.jpg')} const="R$550,00" onClick={() => alert('CLICOU')}>
                            Tenis Nike Air Force 1
                        </Shoes>
                    </View>
                    {/*5-FLEX*/}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Shoes img={require('../../assets/tenisNike7.jpg')} const="R$350,00" onClick={() => alert('CLICOU')}>
                            Tênis Nike Air Zoom-Type Edição Especial Masculino
                        </Shoes>
                        <Shoes img={require('../../assets/tenisNike8.jpg')} const="R$550,00" onClick={() => alert('CLICOU')}>
                            Tenis Nike Revolution 5 Preto
                        </Shoes>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header: {
        marginBottom: 8
    },
    image: {
        width: '100%',
        height: '20%',

    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%',
    },
    line: {
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 2,
    }
});