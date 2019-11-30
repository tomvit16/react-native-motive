import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';

export default class ListForm extends Component {

state = {
        changeText: ''
    }


render () {
    return (
        <View
            style={{
                alignItems: 'center'
            }}>

            <TextInput
                placeholder='enter text'
                style={{
                margin:20,
                borderColor: '#de5236',
                borderWidth: 2,
                height: 40,
                width: 280,
                borderRadius: 20,
                padding: 10,

                }}
                onChangeText={(text) => {
                    this.setState({
                        changeText: text
                    });

                }}

                onSubmitEditing={() => {
                    this.props.onItemAdded(this.state.changeText);
                    this.setState({
                    changeText: ''
                    })
                }
                }
                value={this.state.changeText}
                >

            </TextInput>
        </View>

    )
}

}