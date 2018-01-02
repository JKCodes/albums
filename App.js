/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Header } from './src/components/presentation';
import { Albums } from './src/components/containers';
import { View } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <Albums />
      </View>
    );
  }
}
