import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import {heightPercentageToDP as hp} from '../../Helpers/Responsive';

const IdExtendedListRow = props => {
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

      <TouchableOpacity style={styles.editBtn} onPress={props.onPress}>
        <Text style={styles.textWhite}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.delBtn}>
        <Text style={styles.textWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IdExtendedListRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  rowText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
  },
  editBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 5,
    backgroundColor: '#102A43',
    alignSelf: 'flex-end',
  },
  delBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#3A1B19',
    alignSelf: 'flex-end',
  },
  textWhite: {
    color: 'white',
  },
});
