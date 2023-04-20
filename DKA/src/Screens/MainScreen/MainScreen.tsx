import React from 'react';
import {Button, View} from 'react-native';

import {StackScreenProps, StackParamList} from '../../Navigation';

import styles from './MainScreen.Styles';

const MainScreen = ({navigation}: StackScreenProps<'Main'>): JSX.Element => {
  return (
    <View style={styles.ContainerStyle}>
      <Button title="GO TO SEC SC" onPress={() => navigation.push('Second')} />
      <Button
        title="GO TO BarCode SC"
        onPress={() => navigation.push('Barcode')}
      />
    </View>
  );
};

export default MainScreen;
