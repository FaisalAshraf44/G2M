import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const NoteElement = props => {
  return (
    <View style={[styles.container, {backgroundColor: props.color}]}>
      <Text style={{fontSize: 12}}>Remember to collect patch data from it</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}>
        <View style={styles.row}>
          <Text style={styles.rowText}>Morten Mortensen</Text>
          <Text style={styles.rowText1}> 18/10/2019</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>Deadline</Text>
          <Text style={styles.rowText1}> 28/10/2019</Text>
        </View>
      </View>
    </View>
  );
};

export default NoteElement;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  rowText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  rowText1: {
    fontSize: 10,
    fontWeight: '300',
  },
});
