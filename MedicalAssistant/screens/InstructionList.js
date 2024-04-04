import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import InstructionCard from './InstructionCard';

const instructionsData = require('../data/instruction.json');

const BOTTOM_TAB_HEIGHT = 100;

const InstructionList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.list}>
            {instructionsData.map((instruction, index) => (
              <InstructionCard key={index} instruction={instruction} />
            ))}
      </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: BOTTOM_TAB_HEIGHT
  },
});

export default InstructionList;
