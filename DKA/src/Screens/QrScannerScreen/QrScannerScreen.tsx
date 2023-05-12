import React, {useCallback} from 'react';
import {StyleSheet, Text, Dimensions, Alert, View} from 'react-native';
import QRCodeScanner from 'react-native-infy-qrcode-scanner';
import BottomSheet, {
  BottomSheetRefProps,
} from '../../Components/BottomSheet/BottomSheet';

const {height, width} = Dimensions.get('window');

const QrScannerScreen: React.FC = () => {
  const ref = React.useRef<BottomSheetRefProps>(null);

  const [value, setValue] = React.useState('');
  const onSuccess = useCallback((e: any) => {
    Alert.alert(e.data);
    setValue(e.data);
    // Linking.openURL(e.data).catch(err => console.error('Error', err));
  }, []);
  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);

  return (
    <>
      <QRCodeScanner
        containerStyle={styles.container}
        cameraContainerStyle={styles.container}
        cameraStyle={{
          height,
        }}
        onRead={onSuccess}
        reactivate={true}
        reactivateTimeout={2000}
        showMarker
        fadeIn
        markerStyle={styles.markerStyle}
      />
      <BottomSheet ref={ref}>
        <View style={{flex: 1}}>
          <Text style={styles.buttonText}>{value}</Text>
        </View>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  centerText: {
    flex: 1,
    fontSize: 16,
    padding: 20,
    color: '#eee',
  },
  textBold: {
    fontWeight: '600',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: '#009b00',
  },
  buttonTouchable: {
    padding: 10,
  },
  markerStyle: {
    borderColor: '#D9D9D9',
    borderRadius: 40,
    borderWidth: 3,
    width: 230,
    height: 230,
  },
});

export default QrScannerScreen;
