import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SaveAreaView } from 'react-native';
import Tts from 'react-native-tts';

const TextToSpeechScreen = () => {
    const [textToSpeak, setTextToSpeak] = useState('Россия вперед!');
  
    useEffect(() => {
      // Инициализация TTS
      Tts.setDefaultRate(0.45);
      Tts.setDefaultPitch(1);
      Tts.setDefaultLanguage('ru-RU');
  
      return () => {
        Tts.stop();
        Tts.shutdown();
      };
    }, []);
  
    // Функция для озвучивания текста
    const speakText = async () => {
      try {
        await Tts.speak(textToSpeak);
      } catch (error) {
        console.error('Ошибка воспроизведения озвучки', error);
      }
    };
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{textToSpeak}</Text>
        <TouchableOpacity onPress={speakText} style={{ marginTop: 20, padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
          <Text style={{ color: 'white' }}>Озвучить</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default TextToSpeechScreen;
  