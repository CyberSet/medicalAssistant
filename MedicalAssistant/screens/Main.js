import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, FlatList, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import InstructionCardRoutes from './InstructionCardRoutes';

const instructionsData = require('../data/instruction.json');

const Main = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredInstructions, setFilteredInstructions] = useState([]);

  useEffect(() => {
    const filterInstructions = () => {
      const filtered = instructionsData.filter((instruction) =>
        instruction.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredInstructions(filtered);
    };

    filterInstructions();
  }, [searchText]);

  const handleInstructionPress = (instruction) => {
    navigation.navigate('InstructionCardRoutes', { instruction });
  };

  const clearSearchText = () => {
    setSearchText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Что у Вас случилось?"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={clearSearchText} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
      {searchText.length > 0 && (
        <FlatList
          data={filteredInstructions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleInstructionPress(item)}>
              <Text style={styles.item}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(256, 256, 256, 1)',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 0.8, 
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 7.5,
    backgroundColor: 'rgba(245, 245, 245, 1)',
  },
  clearButton: {
    marginLeft: 10,
  },
  clearButtonText: {
    fontSize: 18,
    color: 'red', // Вы можете настроить цвет по вашему усмотрению
  },
  item: {
    padding: 10,
    paddingLeft: 30,
    fontSize: 18,
    height: 44,
    backgroundColor: 'rgba(250, 250, 250, 1)',
  },
});

export default Main;
