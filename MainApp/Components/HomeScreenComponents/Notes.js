import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Helpers/Responsive';

import {Card} from 'react-native-elements';
import IdListRow from './IdListRow';
import NoteElement from '../NoteElement';
import React from 'react';

const listItems = [{}, {}, {}];

const Notes = props => {
  return (
    <Card containerStyle={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <Text style={styles.title}>Notes</Text>
        <TouchableOpacity style={styles.listBtn} onPress={props.onPress}>
          <Text style={{color: 'white'}}>ALL NOTES</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{marginTop: 20}}>
        <View>
          <NoteElement color="#DADADA" />
        </View>
        <View style={{marginTop: 15}}>
          <NoteElement color="#D4B7B4" />
        </View>
        <View style={{marginTop: 15}}>
          <NoteElement color="#DADADA" />
        </View>
      </ScrollView>
    </Card>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: hp(54),
    width: wp(31),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#102A43',
  },
  colName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#102A43',
  },
  listBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#102A43',
    borderRadius: 5,
  },
});
