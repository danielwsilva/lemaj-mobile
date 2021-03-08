import React from 'react';
import { SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';
import { StatusBar } from 'react-native';

import loadging from '../../assets/animation/loading.json';

const Loading = () => {
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}
      >
        <Lottie resizeMode="contain" autoSize source={loadging} autoPlay loop />
      </SafeAreaView>
      
      <StatusBar ranslucent={true} backgroundColor={'transparent'} />
    </>
  );
};

export default Loading;
