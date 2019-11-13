import React, {Component} from 'react';
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
} from '../Helpers/Responsive';

import {Card} from 'react-native-elements';
import IDExtendedListRow from './IDExtendedListRow';

const listItems = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const IDExttendedList = props => {
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
        <TouchableOpacity style={styles.listBtn}>
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
        <View style={{flex: 0.1, marginLeft: 5}}>
          <Text style={styles.colName}>GRID</Text>
        </View>
        <View style={{flex: 0.2}}>
          <Text style={styles.colName}>NEW BUILDING</Text>
        </View>
        <View style={{flex: 0.1}}>
          <Text style={styles.colName}>NEW FLOOR</Text>
        </View>
        <View style={{flex: 0.1}}>
          <Text style={styles.colName}>NEW ROOM</Text>
        </View>
        <View style={{flex: 0.1}}>
          <Text style={styles.colName}>NEW GRID</Text>
        </View>
        <View style={{width: wp(9)}}></View>
      </View>
      <ScrollView style={{marginHorizontal: -16, height: hp(67)}}>
        {listItems.map((item, key) => {
          return (
            <IDExtendedListRow
              key={key}
              color={key % 2 == 0 ? '#DADADA' : 'white'}
            />
          );
        })}
      </ScrollView>
    </Card>
  );
};

export default IDExttendedList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
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
