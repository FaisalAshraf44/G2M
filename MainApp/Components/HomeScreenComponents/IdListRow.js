import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const IdListRow = props => {
  return (
    <View style={[styles.container, {backgroundColor: props.color}]}>
      <View style={{flex: 0.3}}>
        <Text>Morten Mortensen</Text>
      </View>
      <View style={{flex: 0.2}}>
        <Text>MM</Text>
      </View>
      <View style={{flex: 0.2}}>
        <Text>Building 1</Text>
      </View>
      <View style={{flex: 0.1}}>
        <Text>2</Text>
      </View>
      <View style={{flex: 0.1}}>
        <Text>867</Text>
      </View>
      <View style={{flex: 0.1}}>
        <Text>X2</Text>
      </View>
    </View>
  );
};

export default IdListRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  rowText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
  },
});
