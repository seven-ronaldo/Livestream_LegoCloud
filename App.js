import Navigation from './navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {ZegoUIKitPrebuiltLiveStreamingFloatingMinimizedView} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      <ZegoUIKitPrebuiltLiveStreamingFloatingMinimizedView />
    </NavigationContainer>
  );
};

export default App;

