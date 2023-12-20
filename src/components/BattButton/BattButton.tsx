import React, { useState } from 'react';
import { Button, View, Text, Pressable, TouchableOpacity } from 'react-native';

import { styles } from './BattButtonStyles';
import { BattTextInput } from '../BattTextInput/BattTextInput';
import generatePass from '../../services/passWordServise';

import * as Clipboard from 'expo-clipboard';

export function BattButton() {

   const [pass, setPass] = useState('')

   function handleGenerateButton(){
      let generateToken =  generatePass()
      setPass(generateToken)
   }

  function hendleCopyButton(){
      Clipboard.setStringAsync(pass)
  }

  return (
    <>
        
            <BattTextInput pass={pass}/>
         {/*Também temos essa opção de touchableOpacity  e o pressable, para torna algo clicavel */}
          <TouchableOpacity 
           onPress={handleGenerateButton}
           style={styles.button}
           >
          <Text style={styles.text}>Generate</Text>
          </TouchableOpacity>


          <TouchableOpacity 
           onPress={hendleCopyButton}
           style={styles.button}
           >
          <Text style={styles.text}>⚡COPY</Text>
          </TouchableOpacity>

    </>
  );
}