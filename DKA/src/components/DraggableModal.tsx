import React, {useState} from 'react';
import {View, Animated, PanResponder} from 'react-native';

const DraggableModal: React.FC = ({children}) => {
  const [modalPosition, setModalPosition] = useState(
    new Animated.ValueXY({x: 0, y: 500}),
  );
  const [isFullScreen, setIsFullScreen] = useState(false);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => gestureState.dy > 10,
    onPanResponderMove: Animated.event([null, {dy: modalPosition.y}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dy < -150) {
        setIsFullScreen(true);
        Animated.spring(modalPosition, {
          toValue: {x: 0, y: -500},
          useNativeDriver: false,
        }).start();
      } else {
        Animated.spring(modalPosition, {
          toValue: {x: 0, y: 500},
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <View style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          {transform: [{translateY: modalPosition.y}]},
          isFullScreen && {height: '100%'},
          ,
        ]}>
        {children}
      </Animated.View>
    </View>
  );
};

export default DraggableModal;
