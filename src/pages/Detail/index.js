import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';


export default function Detail({ navigation }) {

    navigation.setOptions({
        headerTitle: 'Nike Air Vapormax Flyknit 3 Masculino'
    })


    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/tenisNike1.jpg')}
                style={styles.image}
                resizeMode="cover"
            />

            <View>
                <View>
                    <Text style={[styles.title, { fontSize: 24 }]}>R$ 450,00</Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, { fontSize: 30 }]}>Nike Air Vapormax Flyknit 3</Text>
                </View>
            </View>


            <View style={styles.dotContainer}>
                <Dot color='#2379f4' />
                <Dot color='#fb5e53' />
                <Dot color='#000' />
                <Dot color='#ddd' />
            </View>

            <View style={{ flexDirection: 'row', width: '100%' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <SizeButton bgColor="#17181a" color='#fff'>40</SizeButton>
                    <SizeButton>39</SizeButton>
                    <SizeButton>41</SizeButton>
                    <SizeButton>42</SizeButton>
                </ScrollView>
            </View>

            <View style={styles.textContent}>
                <Text style={styles.textTitle}>
                    Nike Air Vapormax Flyknit 3 Masculino
                </Text>
                <Text style={styles.textContent}>
                    Nossa visão de um futuro com zero desperdícios pode parecer algo inatingível, mas o Nike Air Vapormax 2020 Flyknit mostra que estamos dando passos largos nessa direção. Ele é feito com no mínimo 50% do seu peso em materiais reciclados, e nossos designers realizaram um trabalho incrível para transformar lixo em uma inovação que ajuda o planeta.
                </Text>
                <Text style={styles.textList}>
                    - Categoria: Amortecimento
                </Text>
                <Text style={styles.textList}>
                    - Material: Mesh
                </Text>
            </View>


            <Button />

            <View style={styles.line} />

            <Footer />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
        height: 250,
    },
    title: {
        fontFamily: 'Anton_400Regular',
        left: 10
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: 65
    },
    textContent:{
        fontSize: 16,
        lineHeight:25,
        marginVertical: '2%',
        paddingHorizontal: '2%',
    },
    textTitle: {
        fontSize: 22,
        marginVertical: '2%',
    },
    textList: {
        fontSize: 16,
        lineHeight: 25,
    },
    line:{
        borderWidth:1,
        borderBottomColor: '#ddd',
        marginVertical: '2%'
    }
});