import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import InstructionCard from './InstructionCard';

const InstructionCardRoutes = ({ route, navigation}) => {
    const {instruction} = route.params

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <InstructionCard instruction={instruction}/>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      margin: 10
    },
  });

export default InstructionCardRoutes;
