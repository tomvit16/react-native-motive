import React, {Component} from 'react';
import {Text, View, Animated, Button, StyleSheet} from 'react-native';
import { useParams, useLocation, useHistory } from "react-router-dom";



function Motive() {

    const history = useHistory();
    const {user} = useParams();
    const {label} = useLocation().state;


    return (
        <View>
                <Text style={styles.textCongrat}>
                Поздравляю! Ваш истинный мотив к занятию спортом это :  {label}
                </Text>
                      <View>
                        <Text style={styles.discription}>
                            Хотите начать ?
                        </Text>
                      </View>

                     <View style={styles.buttons}>
                        <View style={styles.button1}>
                             <Button
                             color='green'
                             title="Хочу"
                             onPress={() => history.push('/')
                             }></Button>
                         </View>
                          <View style={styles.button2}>
                             <Button
                             color='red'
                             title="Нет"
                             onPress={() => history.push('/')
                             } ></Button>
                          </View>
                     </View>
         </View>

    );

 }

 export default Motive;


 const styles = StyleSheet.create({
 textCongrat: {
    fontSize: 18,
    padding: 10
 },
   button1: {
     color: "#000",
     width: 150,

   },
     button2: {
        color: "#000",
        width: 150,
      },
    buttons: {
        color: "#000",
        flexDirection: 'row',
        justifyContent: 'space-around',

      },
      discription: {
      textAlign: 'center',
      fontSize: 24
      }


 });