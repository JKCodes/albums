import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { APIManager } from '../../utils';
import { Album } from '../presentation';

export default class Albums extends Component {

  constructor() {
    super();
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    APIManager.get('https://rallycoding.herokuapp.com/api/music_albums', null)
    .then(response => {
      this.setState({
        albums: response
      })
    })
    .catch(err => {
      console.log(err.message)
    });
  }

  render() {
    const albumList = this.state.albums

    return (
      <View>
        { (albumList.length === 0) ? <Text>Loading Albums...</Text> :
          albumList.map((album, i) => <Album key={i} album={album} />)
        }
      </View>
    );
  }
}