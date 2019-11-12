import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../Helpers/Responsive';

import CustomHeader from '../Components/Header';
import GenericButton from '../Components/GenericBtn';
import IdList from '../Components/IdList';
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
        <View
          style={{
            position: 'absolute',
            top: hp(4),
            paddingHorizontal: 16,
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <GenericButton title="HELP" />
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: 10}}>
              <GenericButton title="NEW NOTE" />
            </View>
            <GenericButton
              title="LOGOUT"
              onPress={() => this.props.navigation.navigate('login')}
            />
          </View>
        </View>
        <View style={styles.phaseCardsContainer}>
          <PhaseCard title={'Furniture, IT and equipment'} />
          <PhaseCard title={'Logistics and tenders'} />
          <PhaseCard title={'Relocation finale'} />
        </View>
        <View style={{flex: 0.59}}>
          <IdList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    // paddingBottom: 20,
  },
  headerContainer: {
    flex: 0.3,
  },
  phaseCardsContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    marginTop: hp(10),
  },
});
