import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, Linking, Alert} from 'react-native';
import QRCodeScanner from 'react-native-infy-qrcode-scanner';

const QrScannerScreen: React.FC = () => {
  const onSuccess = useCallback((e: any) => {
    Alert.alert(e.data);
    Linking.openURL(e.data).catch(err => console.error('Error', err));
  }, []);

  return (
    <QRCodeScanner
      onRead={onSuccess}
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
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
});

export default QrScannerScreen;
