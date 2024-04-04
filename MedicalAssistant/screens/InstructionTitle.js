// InstructionTitle.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';
import Icon from 'react-native-vector-icons/Ionicons';

const InstructionTitle = ({ title, steps }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentStep, setCurrentStep] = useState(-1);
  
    const playSound = () => {
      if (isPlaying) {
        Tts.stop();
      } else {
        setIsPlaying(true);
        Tts.speak(steps.join('. '), {
          onDone: () => {
            setIsPlaying(false);
            setCurrentStep(-1); // Сбрасываем подсветку после окончания озвучивания
          },
          onStopped: () => {
            setIsPlaying(false);
            setCurrentStep(-1);
          },
          onError: () => {
            setIsPlaying(false);
            setCurrentStep(-1);
          },
        });
      }
    };
  
    const pauseSound = () => {
      Tts.stop();
      setIsPlaying(false);
    };
  
    const handleTtsCancel = () => {
      setIsPlaying(false);
      setCurrentStep(-1);
    };
  
    useEffect(() => {
      const onSpeechProgress = (event) => {
        const progress = event.progress;
        const stepIndex = Math.floor((progress / 100) * steps.length);
        setCurrentStep(stepIndex);
      };
  
      const onSpeechStart = () => {
        setCurrentStep(0);
      };
  
      const onSpeechCancel = handleTtsCancel;
      const onSpeechEnd = handleTtsCancel;
  
      Tts.addEventListener('tts-progress', onSpeechProgress);
      Tts.addEventListener('tts-start', onSpeechStart);
      Tts.addEventListener('tts-cancel', onSpeechCancel);
      Tts.addEventListener('tts-finish', onSpeechEnd);
  
      return () => {
        Tts.removeEventListener('tts-progress', onSpeechProgress);
        Tts.removeEventListener('tts-start', onSpeechStart);
        Tts.removeEventListener('tts-cancel', onSpeechCancel);
        Tts.removeEventListener('tts-finish', onSpeechEnd);
      };
    }, [steps]);
  
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={isPlaying ? pauseSound : playSound} style={styles.playButton}>
          <Icon name={isPlaying ? 'pause' : 'play'} size={16} color="white" />
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  playButton: {
    backgroundColor: 'blue',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InstructionTitle;
