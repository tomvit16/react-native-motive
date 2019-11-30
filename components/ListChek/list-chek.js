import React, {Component} from 'react';
import ListChekItem from '../ListChekItem/list-chek-item';
import {View} from 'react-native'

export default class ListChek extends Component {
    render () {



        const {chekLists} = this.props;
        const elements = chekLists.map((item) => {
            return (
                <View key={item.id}>
                    <ListChekItem {... item} />
                </View>
            )

        });

    return (
        <View>
            {elements}
        </View>
    )
    };
}