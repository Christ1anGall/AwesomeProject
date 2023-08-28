import React from 'react';

import { StyleSheet, View } from 'react-native';

export default ({ color }) => {
  let lado = 60;
  return (
    <View
      style={{ height: lado, width: lado, backgroundColor: color || 'yellow' }}
    />
  );
};
