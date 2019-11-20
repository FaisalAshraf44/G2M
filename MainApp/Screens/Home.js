import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../Helpers/Responsive';

import CustomHeader from '../Components/Header';
import GenericButton from '../Components/HomeScreenComponents/GenericBtn';
import HelpModal from '../Components/HomeScreenComponents/HelpModal';
import IDExtendedList from '../Components/IDExtendedListComponenets/IDExtendedList';
import IdList from '../Components/HomeScreenComponents/IdList';
import NewNoteModal from '../Components/HomeScreenComponents/NewNoteModal';
import Notes from '../Components/HomeScreenComponents/Notes';
import NotesScreen from './NotesScreen';
import PhaseCard from '../Components/HomeScreenComponents/PhaseCard';
import PhaseScreen from './PhaseScreen';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extendedList: false,
      newNoteModal: false,
      phaseDetail: false,
      helpModal: false,
      notesDetail: true,
    };
  }

  ExtendedList = () => {
    this.setState({extendedList: true});
  };

  toggleNewNoteModal = () => {
    this.setState({newNoteModal: !this.state.newNoteModal});
  };
  toggleHelpModal = () => {
    this.setState({helpModal: !this.state.helpModal});
  };
  PhaseDetail = () => {
    this.setState({phaseDetail: !this.state.phaseDetail});
  };
  NotesDetail = () => {
    this.setState({notesDetail: !this.state.notesDetail});
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
          <GenericButton title="HELP" onPress={this.toggleHelpModal} />
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
              this.state.phaseDetail
                ? [
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        position: 'absolute',
                        marginTop: hp(12),
                      }}>
                      <PhaseScreen onPress={this.PhaseDetail} />
                    </View>,
                  ]
                : [
                    this.state.notesDetail
                      ? [
                          <View
                            style={{
                              flexDirection: 'row',
                              flex: 1,
                              position: 'absolute',
                              marginTop: hp(12),
                            }}>
                            <NotesScreen onPress={this.NotesDetail} />
                          </View>,
                        ]
                      : [
                          <>
                            <View style={styles.phaseCardsContainer}>
                              <PhaseCard
                                title={'Furniture, IT and equipment'}
                                onPress={this.PhaseDetail}
                              />
                              <PhaseCard
                                title={'Logistics and tenders'}
                                onPress={this.PhaseDetail}
                              />
                              <PhaseCard
                                title={'Relocation finale'}
                                onPress={this.PhaseDetail}
                              />
                            </View>
                            <View style={{flexDirection: 'row', flex: 0.59}}>
                              <View style={{width: '66.7%'}}>
                                <IdList onPress={this.ExtendedList} />
                              </View>
                              <Notes onPress={this.NotesDetail} />
                            </View>
                          </>,
                        ],
                  ],
            ]}
        <NewNoteModal
          visible={this.state.newNoteModal}
          onPress={this.toggleNewNoteModal}
        />
        <HelpModal
          visible={this.state.helpModal}
          onPress={this.toggleHelpModal}
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
