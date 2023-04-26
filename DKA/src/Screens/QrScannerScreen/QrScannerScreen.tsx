import React, {useCallback, useRef, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import QRCodeScanner from 'react-native-infy-qrcode-scanner';
import SlidingUpPanel from 'rn-sliding-up-panel';

const windowHeight = Dimensions.get('window').height;

const QrScannerScreen: React.FC = () => {
  const [value, setValue] = useState('');
  const panelRef = useRef<SlidingUpPanel>(null);

  const handleButtonPress = () => {
    panelRef.current?.show(200);
  };

  const handlePanelClose = () => {
    panelRef.current?.hide();
  };

  const onSuccess = useCallback((e: any) => {
    setValue(e.data);
    handleButtonPress();
  }, []);
  console.log(value);
  return (
    <>
      <QRCodeScanner onRead={onSuccess} bottomContent={
        <View style={{backgroundColor:'red', height:'100%'}} >
          <Text>sdjghfsljhfs</Text>
        </View>
      } />

      <SlidingUpPanel
        ref={panelRef}
        draggableRange={{top: windowHeight,bottom: 0}}
        onBottomReached={handlePanelClose}>
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>{value}</Text>
        </View>
      </SlidingUpPanel>
    </>
  );
};
const styles = StyleSheet.create({
  panel: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  }
});

export default QrScannerScreen;
