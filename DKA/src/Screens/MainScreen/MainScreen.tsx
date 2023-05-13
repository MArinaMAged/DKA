import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {StackScreenProps} from '../../Navigation';

const MainScreen = ({navigation}: StackScreenProps<'Main'>): JSX.Element => {
  return (
    <View style={styles.container}>
      <Button title="GO TO SEC SC" onPress={() => navigation.push('Second')} />

      <Button
        title="GO TO QR Scanner"
        onPress={() => navigation.push('QrScanner')}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'red',
    opacity: 0.6,
  },
});
