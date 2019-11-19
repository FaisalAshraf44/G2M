import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../Helpers/Responsive';

import {Card} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import IdListRow from './IdListRow';
import React from 'react';

export const PhaseElement = props => {
  return (
    <View
      style={[
        styles.container1,
        {
          backgroundColor: props.color,
          borderColor: props.selected ? 'black' : 'transparent',
        },
      ]}>
      <Text style={styles.rowText}>{props.title}</Text>
      {props.selected
        ? [<Icon name="play-arrow" size={24} color="black" />]
        : []}
    </View>
  );
};

class PhaseListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [{color: '#DADADA'}, {color: '#DADADA'}, {color: '#DADADA'}],
      first: true,
      second: false,
      third: false,
      fourth: false,
      selectedItem: {},
    };
  }

  render() {
    return (
      <Card containerStyle={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 5,
          }}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Icon
              name="arrow-left-drop-circle"
              type="material-community"
              color="#102A43"
              size={35}
            />
          </TouchableOpacity>
          <View style={{marginLeft: 20}}>
            <Text style={styles.title}>Logistics & Tenders</Text>
            <Text>PHASE 1</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.setState({
              first: true,
              second: false,
              third: false,
              fourth: false,
            });
          }}
          style={{marginTop: 40}}>
          <PhaseElement
            color="#DADADA"
            selected={this.state.first}
            title="MOVING TENDER"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              first: false,
              second: true,
              third: false,
              fourth: false,
            });
          }}>
          <PhaseElement
            color="#DADADA"
            selected={this.state.second}
            title="DRAWING"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.setState({
              first: false,
              second: false,
              third: true,
              fourth: false,
            });
          }}>
          <PhaseElement
            color="#DADADA"
            selected={this.state.third}
            title="ID LIST & SEATING"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.setState({
              first: false,
              second: false,
              third: false,
              fourth: true,
            });
          }}>
          <PhaseElement
            color="#DADADA"
            selected={this.state.fourth}
            title="LABELS & MARKINGS"
          />
        </TouchableOpacity>
      </Card>
    );
  }
}

export default PhaseListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp(80),
    width: wp(25),
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
  container1: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderWidth: 1,
    marginTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
  },
  rowText: {
    fontSize: 20,
    fontWeight: '200',
    color: 'black',
    marginLeft: 20,
  },
});
