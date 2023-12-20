import React from 'react';
import {View, TextInput } from 'react-native';

import { styles } from './BattTextInputStyles';

interface BattTextInputProps {
  pass: string
}

export function BattTextInput(props: BattTextInputProps) {
  return (

       <TextInput style={styles.inputer}
        placeholder='Pass' 
        value={props.pass}
        
        />
      
       
    
  );
}