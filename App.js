import React from 'react';
import styles from './styles';
import ListContainer from './ListContainer';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ListContainer />
    </View>
  );
}
