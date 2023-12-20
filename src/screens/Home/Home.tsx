import React from "react";
import {Text, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from  './Style'
import { BattLogo } from "../../components/BattLogo/BattLogo";
import { BattTextInput } from "../../components/BattTextInput/BattTextInput";
import { BattButton } from "../../components/BattButton/BattButton";



export default function Home(){
    return(
        <View style={styles.appContainer}>
               <View style={styles.logoContainer}>
               <BattLogo />
               </View>

              <View style={styles.inputContainer}>
                
                <BattButton />
              </View>

              <StatusBar style="light" />
        </View>
    )
        
}







