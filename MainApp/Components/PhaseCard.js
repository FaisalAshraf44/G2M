import {Card, Icon} from 'react-native-elements';
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {heightPercentageToDP as hp} from '../Helpers/Responsive';

const PhaseCard = props => {
  return (
    <Card containerStyle={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{alignSelf: 'flex-end'}}>PHASE 1</Text>
        <TouchableOpacity>
          <Icon
            name="arrow-right-drop-circle"
            type="material-community"
            color="#102A43"
            size={35}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </Card>
  );
};

export default PhaseCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp(28),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#102A43',
  },
  explore: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#102A43',
  },
});
