/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Navigation from './src/Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>INVENTORY COUNT</Text>
      </View>
      <Navigation />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  header: {
    height: 44,
    width: '100%',
    backgroundColor: '#121619',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTxt: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default App;
