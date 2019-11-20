import {Card, CheckBox} from 'react-native-elements';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Helpers/Responsive';

import React from 'react';

const listItems = [{}, {}, {}];

class NoteDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label1: false,
      label2: false,
      label3: false,
      label4: false,
    };
  }

  render() {
    return (
      <Card containerStyle={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <Text style={styles.title}>ID list & seating</Text>
          <TouchableOpacity
            style={styles.listBtn}
            onPress={this.togglePhaseFAQmodal}>
            <Text style={{color: 'white', fontSize: 12}}>FAQ</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 20,
            borderWidth: 1,
            borderColor: 'black',
            paddingHorizontal: 5,
            paddingTop: 5,
            paddingBottom: 10,
          }}>
          <Text>
            I understand that the ID list will be locked once I press "ODER" and
            that the labels produced will be base on the ID list as it I
            understand that the ID list will be locked once I press "ODER" and
            that the labels produced will be base on the ID list as it I
            understand that the ID list will be locked once I press "ODER" and
            that the labels produced will be base on the ID list as it I
            understand that the ID list will be locked once I press "ODER" and
            that the labels produced will be base on the ID list as it I
            understand that the ID list will be locked once I press "ODER" and
            understand that the ID list will be locked once I press "ODER" and
            that the labels produced will be base on the ID list as it I
            understand that the ID list will be locked once I press "ODER" and
            that the labels produced will be base on the ID list as it I
            understand that the ID list will be locked once I press "ODER" and
            understand that the ID list will be locked once I press "ODER" and
            that the labels produced will be base on the ID list as it I that
            the labels produced will
          </Text>
        </View>
      </Card>
    );
  }
}

export default NoteDescription;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: hp(40),
    width: wp(40),
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
    paddingVertical: 6,
    backgroundColor: '#102A43',
    borderRadius: 2,
  },
  checkBoxContainer: {
    width: wp(60),
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: 4,
    backgroundColor: 'white',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  checkBoxDescription: {
    color: '#102A43',
    fontSize: 14,
    marginLeft: -10,
  },
  checkBoxIcon: {
    width: 25,
    height: 25,
  },
});
