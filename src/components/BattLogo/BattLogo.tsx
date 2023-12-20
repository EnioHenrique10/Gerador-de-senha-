import React from 'react';
import { View, Text, Image } from 'react-native';

import BatLogo from '../../../assets/batmanLogo.png'

import { styles } from './BattLogoStyles';

export function BattLogo() {
  return (
    <>
      <Text style={styles.title}>
         BAT PASS GENERATOR
      </Text>
      <Image 
        source={BatLogo}
        style={{resizeMode:'contain', height: 250}}
      />
    </>
  );
}