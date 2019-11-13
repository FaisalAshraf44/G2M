import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../Helpers/Responsive';

import IdList from '../Components/IdList';
import Notes from '../Components/Notes';
import PhaseCard from '../Components/PhaseCard';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={{flex: 0.67}}>
          <IdList />
        </View>
        <View style={{flex: 0.33}}>
          <Notes />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  phaseCardsContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    marginTop: hp(12),
  },
});
