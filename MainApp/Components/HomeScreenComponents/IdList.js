import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Card} from 'react-native-elements';
import IdListRow from './IdListRow';
import {heightPercentageToDP as hp} from '../../Helpers/Responsive';

const listItems = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const IdList = props => {
  return (
    <Card containerStyle={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <Text style={styles.title}>ID List</Text>
        <TouchableOpacity style={styles.listBtn} onPress={props.onPress}>
          <Text style={{color: 'white'}}>GO TO ID list</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 5}}>
        <View style={{flex: 0.3}}>
          <Text style={styles.colName}>NAME</Text>
        </View>
        <View style={{flex: 0.2}}>
          <Text style={styles.colName}>UNIQUEID</Text>
        </View>
        <View style={{flex: 0.2}}>
          <Text style={styles.colName}>BUILDING</Text>
        </View>
        <View style={{flex: 0.1}}>
          <Text style={styles.colName}>FLOOR</Text>
        </View>
        <View style={{flex: 0.1}}>
          <Text style={styles.colName}>ROOM</Text>
        </View>
        <View style={{flex: 0.1}}>
          <Text style={styles.colName}>GRID</Text>
        </View>
      </View>
      <ScrollView style={{marginHorizontal: -16, height: hp(40)}}>
        {listItems.map((item, key) => {
          return (
            <IdListRow key={key} color={key % 2 == 0 ? '#DADADA' : 'white'} />
          );
        })}
      </ScrollView>
    </Card>
  );
};

export default IdList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    // paddingBottom: 80,
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
    borderRadius: 2,
  },
});
