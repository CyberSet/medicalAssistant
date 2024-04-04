// InstructionStep.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InstructionStep = ({ index, step }) => {
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.step}>{`${index + 1}. ${step}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    marginBottom: 5,
  },
  step: {
    fontSize: 16,
  },
});

export default InstructionStep;
