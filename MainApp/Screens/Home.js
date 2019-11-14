import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../Helpers/Responsive';

import CustomHeader from '../Components/Header';
import GenericButton from '../Components/GenericBtn';
import IDExtendedList from '../Components/IDExtendedList';
import IdList from '../Components/IdList';
import NewNoteModal from '../Components/NewNoteModal';
import Notes from '../Components/Notes';
import PhaseCard from '../Components/PhaseCard';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extendedList: false,
      newNoteModal: false,
    };
  }

  ExtendedList = () => {
    this.setState({extendedList: true});
  };

  toggleNewNoteModal = () => {
    this.setState({newNoteModal: !this.state.newNoteModal});
  };

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
              <GenericButton
                title="NEW NOTE"
                onPress={this.toggleNewNoteModal}
              />
            </View>
            <GenericButton
              title="LOGOUT"
              onPress={() => this.props.navigation.navigate('login')}
            />
          </View>
        </View>
        {this.state.extendedList
          ? [
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  position: 'absolute',
                  marginTop: hp(12),
                }}>
                <IDExtendedList />
              </View>,
            ]
          : [
              <>
                <View style={styles.phaseCardsContainer}>
                  <PhaseCard title={'Furniture, IT and equipment'} />
                  <PhaseCard title={'Logistics and tenders'} />
                  <PhaseCard title={'Relocation finale'} />
                </View>
                <View style={{flexDirection: 'row', flex: 0.59}}>
                  <View style={{width: '66.7%'}}>
                    <IdList onPress={this.ExtendedList} />
                  </View>
                  <Notes />
                </View>
              </>,
            ]}
        <NewNoteModal
          visible={this.state.newNoteModal}
          onPress={this.toggleNewNoteModal}
        />
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

/////////////// extended list ////////
// <View
//   style={{
//     flexDirection: 'row',
//     flex: 1,
//     position: 'absolute',
//     marginTop: hp(12),
//   }}>
//   <IDExtendedList />
// </View>
