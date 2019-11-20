import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Helpers/Responsive';

import {Card} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import React from 'react';

const notesList = [
  {selected: true, id: 1},
  {selected: false, id: 2},
  {selected: false, id: 3},
];

export const NoteElement = props => {
  return (
    <View
      style={[
        styles.noteElement,
        {
          backgroundColor: props.index % 2 == 0 ? '#DADADA' : '#D4B7B4',
          borderColor: props.selected == props.id ? 'black' : 'transparent',
        },
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: -14,
        }}>
        <Text style={{fontSize: 14, fontWeight: '100'}}>
          Remember to collect patch data from it
        </Text>
        {props.selected == props.id
          ? [<Icon name="play-arrow" size={24} color="grey" />]
          : []}
      </View>
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

class NotesListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [{color: '#DADADA'}, {color: '#DADADA'}, {color: '#DADADA'}],
      first: true,
      second: false,
      third: false,
      fourth: false,
      selected: 1,
    };
  }

  render() {
    return (
      <Card containerStyle={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
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
            <Text style={styles.title}>Notes</Text>
          </View>
        </View>

        {notesList.map((item, key) => {
          return (
            <TouchableOpacity
              onPress={() => this.setState({selected: item.id})}>
              <NoteElement
                id={item.id}
                index={key}
                selected={this.state.selected}
              />
            </TouchableOpacity>
          );
        })}
      </Card>
    );
  }
}

export default NotesListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp(80),
    width: wp(30),
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
  noteElement: {
    marginHorizontal: -10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
  },
  rowText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  rowText1: {
    fontSize: 12,
    fontWeight: '300',
  },
});
