import React from 'react';
import { Text } from 'react-native';
import { Card } from './'

const Album = (props) => {
  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  );
};

export default Album;