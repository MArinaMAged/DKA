import React, {useCallback, useContext, useRef} from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import QRCodeScanner from 'react-native-infy-qrcode-scanner';
import BottomSheet, {
  BottomSheetRefProps,
} from '../../Components/BottomSheet/BottomSheet';
import {QRContext} from '../../context/qrsContext';

const {height} = Dimensions.get('window');

const QrScannerScreen: React.FC = () => {
  const ref = useRef<BottomSheetRefProps>(null);
  const {QRs, addQR, clearQRs} = useContext(QRContext);

  const onSuccess = useCallback((e: any) => {
    addQR(e.data);
    onPress();
    Linking.openURL(e.data).catch(err => console.error('Error', err));
  }, []);
  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-350);
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
        <>
          <View style={styles.modalHeader}>
            <Text style={styles.headerTitle}>{QRs.length} Items Scanned</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={clearQRs}>
              <Text style={[styles.headerTitle, styles.clear]}>clear list</Text>
            </TouchableOpacity>

            <View />
          </View>
          <View>
            {QRs.map((qr, index) => {
              return (
                <View style={styles.qrResult} key={index.toString()}>
                  <View>
                    <Text style={styles.qrText}>GTIN: {qr}</Text>
                    <Text style={styles.qrSubText}>
                      Expiry date: 04.04.2026{' '}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalHeader: {
    height: 48,
    paddingHorizontal: 16,
    width: '100%',
    paddingTop: 15,
    backgroundColor: 'white',
    alignContent: 'center',
    flexDirection: 'row',
  },
  qrText: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '600',
    color: '#121619',
  },
  qrSubText: {
    fontSize: 12,
    lineHeight: 14.32,
    fontWeight: '600',
    color: '#8795A1',
    marginTop: 5,
  },
  headerTitle: {
    fontSize: 12,
    lineHeight: 14.32,
    fontWeight: '600',
    color: '#121619',
  },
  clear: {
    color: '#FA4446',
    textAlign: 'right',
    textTransform: 'uppercase',
    marginLeft: 125,
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
  qrResult: {
    height: 80,
    marginVertical: 2.5,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 22,
    paddingLeft: 15,
    alignItems: 'center',
  },
});

export default QrScannerScreen;
