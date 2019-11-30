/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Chat from './components/chat/chat';
import Motive from './components/Motive/Motive';

import { NativeRouter as Router, Route, Switch } from "react-router-native";


export default class App extends React.Component {

    state = {
        baseRender:
            [
                {label: 'Ты хочешь заняться фитнесом?', id: 1, listStyle: 'answer'},
            ]
        };

    render () {
        return (
                <Router>
                    <Switch>
                        <Route path="/" component={Chat}  exact />
                        <Route path="/motive" component={Motive}  />
                    </Switch>
                </Router>
            )
        }
    }
