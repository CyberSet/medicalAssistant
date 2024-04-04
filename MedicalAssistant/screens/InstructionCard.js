// InstructionCard.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import InstructionTitle from './InstructionTitle';
import InstructionStep from './InstructionStep';

const InstructionCard = ({ instruction }) => {
  const [isPlaying, setPlaying] = useState(false);

  const images = {
    1: { name: require('../images/instruction/nos.png'), height: 920 },
    6: { name: require('../images/instruction/ozhog.png'), height: 220 },
    18: { name: require('../images/instruction/alko.png'), height: 250 },
    19: { name: require('../images/instruction/alko.png'), height: 250 },
    20: { name: require('../images/instruction/ozhog.png'), height: 220 },
    21: { name: require('../images/instruction/ozhog.png'), height: 220 },
    31: { name: require('../images/instruction/firstBlood.jpeg'), height: 270 },
    32: { name: require('../images/instruction/insult.png'), height: 175 },
    33: { name: require('../images/instruction/zhgut.png'), height: 275 },
    35: { name: require('../images/instruction/obstruction.png'), height: 400 },
    36: { name: require('../images/instruction/obstructionChild.png'), height: 400 },
  };
  

  return (
    <View style={styles.card}>
      <InstructionTitle title={instruction.title} steps={instruction.steps} setPlaying={setPlaying} />
      {instruction.steps.map((step, index) => (
        <InstructionStep key={index} index={index} step={step} isPlaying={isPlaying} />
      ))}
      {instruction.image && (
        <Image source={images[instruction.id].name} style={styles.image} resizeMode="contain" height={images[instruction.id].height}/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    marginTop: 10,
    borderRadius: 8,
  },
});

export default InstructionCard;
