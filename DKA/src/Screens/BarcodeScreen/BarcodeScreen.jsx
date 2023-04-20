import React from 'react';
import BarcodeScanner from 'react-native-scan-barcode';

class BarcodeScreen extends React.Component {
  state = {
    torchMode: 'off',
    cameraType: 'back',
  };
  barcodeReceived(e) {
    console.log('Barcode: ' + e.data);
    console.log('Type: ' + e.type);
  }
  render() {
    return (
      <BarcodeScanner
        onBarCodeRead={this.barcodeReceived}
        style={{flex: 1}}
        torchMode={this.state.torchMode}
        cameraType={this.state.cameraType}
      />
    );
  }
}

export default BarcodeScreen;
