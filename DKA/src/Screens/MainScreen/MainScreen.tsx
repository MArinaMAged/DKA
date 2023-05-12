import React, {useCallback, useRef} from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {StackScreenProps, StackParamList} from '../../Navigation';

import style from './MainScreen.Styles';
import BottomSheet, {
  BottomSheetRefProps,
} from '../../Components/BottomSheet/BottomSheet';

const MainScreen = ({navigation}: StackScreenProps<'Main'>): JSX.Element => {
  const ref = useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);

  return (
    // <View style={style.ContainerStyle}>
    <View style={styles.container}>
      {/* <Button
        title="GO TO SEC SC"
        onPress={() => navigation.push('Second')}
      />

      <Button
        title="GO TO QR Scanner"
        onPress={() => navigation.push('QrScanner')}
      /> */}
      <TouchableOpacity style={styles.button} onPress={onPress} />
      <BottomSheet ref={ref}>
        <View style={{flex: 1, backgroundColor: 'orange'}} />
      </BottomSheet>
    </View>
    // </View>
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
