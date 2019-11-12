import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import React from 'react';

const GenericButton = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={{color: '#102A43', fontWeight: 'bold'}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default GenericButton;

const styles = StyleSheet.create({
  container: {
    width: 100,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
