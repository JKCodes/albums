/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Header } from './src/components/presentation';

export default class App extends Component<{}> {
  render() {
    return (
      <Header headerText={'Albums'} />
    );
  }
}
