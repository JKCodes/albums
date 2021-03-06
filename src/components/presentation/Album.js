import React from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './'

const Album = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default Album;