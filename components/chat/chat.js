/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import ListForm from '../ListForm/list-form';
import ListChek from '../ListChek/list-chek';
import {db} from '../../firebase';



const linkToMotive = (history, newItem) => {

history.push('/motive', newItem);

};


export default class Chat extends React.Component {

maxId = 100;

state = {
    baseRender:
        [
            {label: 'Ты хочешь заняться фитнесом?', id: 1, listStyle: 'answer'},
        ]
    }

answerBase = [
{label: 'Ты хочешь заняться фитнесом?', id: 1, listStyle: 'answer'},
{label: 'Как ты это видишь ?', id: 2, listStyle: 'answer'},
{label: 'Какая польза тебе в этом ?', id: 3, listStyle: 'answer'},
{label: 'Какой новый способ достичь эту пользу и что может смотивировать тебя на достижение этой пользы', id: 4, listStyle: 'answer'},
{label: '...', id: 5, listStyle: 'answer' }

]

addItem = (text) => {
    const newItem = {
    label: text,
    id: this.maxId++,
    listStyle: 'question'
    };
if (newItem.id < 104) {
    this.setState(({baseRender}) => {
    const idAddItem = newItem.id - 99;
    const oldItem = this.answerBase[idAddItem];

    const newArr = [
    ...baseRender,
    newItem,
    oldItem
    ];

    return {
        baseRender: newArr
    };
    });
    } ;

    if (newItem.id == 103) {
        linkToMotive(this.props.history, newItem);
    }
};

    // componentDidUpdate() {
    // const itemForDB = this.state.baseRender
    // const dataId = new Date().getTime();
    //     db.collection("chatAnswer").doc(dataId.toString()).set({
    //         name: itemForDB
    //     })
    //     .then(function() {
    //          console.log("Document successfully written!");
    //     })
    //     .catch(function(error) {
    //         console.error("Error writing document: ", error);
    //     });
    // }


render () {

  return (
   <>

     <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>


          <View style={styles.container}>

          <ListChek
            chekLists={this.state.baseRender}
            />

          <ListForm
            onItemAdded={this.addItem}
           />


          </View>
        </ScrollView>
     </SafeAreaView>
    </>
  );
};
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },

  container: {
  flex: 1,
  justifyContent: 'space-between',
  backgroundColor: '#fff',
  }
});

