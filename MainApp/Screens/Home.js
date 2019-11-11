import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../Helpers/Responsive';

import CustomHeader from '../Components/Header';
import PhaseCard from '../Components/PhaseCard';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <CustomHeader />
        </View>
        <View style={styles.phaseCardsContainer}>
          <PhaseCard title={'Furniture, IT and equipment'} />
          <PhaseCard title={'Logistics and tenders'} />
          <PhaseCard title={'Relocation finale'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.35,
  },
  phaseCardsContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: hp(15),
  },
});
