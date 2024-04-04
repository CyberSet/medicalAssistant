import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BOTTOM_TAB_HEIGHT = 50;

// Компонент карточки
const Card = ({ item }) => {
    const handleCardPress = () => {
        Linking.openURL(item.link);
    };

    return (
        <TouchableOpacity onPress={handleCardPress}>
            <View style={styles.card}>
                <Text style={styles.cardType}>{item.type}</Text>
                <View style={styles.cardBottomContainer}>
                    <Text style={styles.cardText}>{item.name}</Text>
                    <Icon name="open-outline" size={20} color="#333" style={styles.linkIcon} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const Intresting = () => {
    const data = require('../data/intresting.json');

    return (
        <SafeAreaView style={styles.main}>
            <ScrollView contentContainerStyle={styles.container} >
                {data.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        marginHorizontal: 10,
        paddingBottom: BOTTOM_TAB_HEIGHT // Добавленный отступ для учёта высоты нижнего таб-навигатора
    },
    card: {
        width: '100%',
        padding: 8,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'rgba(245, 245, 245, 1)',
    },
    cardBottomContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 1
    },
    cardType: {
        fontSize: 12,
        color: 'grey',
        fontWeight: 'bold',
    },
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
    },
    linkIcon: {
        marginHorizontal: 5,
    }
});

export default Intresting;
