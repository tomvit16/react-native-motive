import React, {Component} from 'react';
import {Text, View, Animated} from 'react-native';

export default class ListChekItem extends Component {

state = {
    fadeValue: new Animated.Value(0),
}

    dinStyle = () => {
        if (this.props.listStyle === 'answer') {
            return {
                maxWidth: 300,
                fontSize: 18,
                backgroundColor: '#efefef',
                borderRadius: 20,
                padding: 10,
                margin: 20,
                borderTopLeftRadius: 0
            }
        } else {
            return {
                 maxWidth: 300,
                 fontSize: 18,
                 backgroundColor: '#de5236',
                 borderRadius: 20,
                 padding: 10,
                 margin: 20,
                 borderTopLeftRadius: 0,
                 color: '#ffffff'

            }
        }
    };

    dinStyleView = () => {
        if (this.props.listStyle === 'answer') {
            return {
                marginRight: 'auto'
            }
        } else {
            return {
                marginLeft: 'auto'
            }
        }
    };

render () {
    const {label} = this.props;

    return (
        <View
            style={this.dinStyleView()}>
                <Text
                    style={this.dinStyle()}>
                    {label}
                </Text>
        </View>
    );
}
 }