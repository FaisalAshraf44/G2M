import {Card, CheckBox} from 'react-native-elements';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Helpers/Responsive';

import NoteElement from '../NoteElement';
import React from 'react';

const listItems = [{}, {}, {}];

class IDListSeating extends React.Component {
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
          <TouchableOpacity style={styles.listBtn}>
            <Text style={{color: 'white', fontSize: 12}}>FAQ</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.checkBoxContainer, {marginTop: 20}]}>
          <CheckBox
            containerStyle={{marginLeft: -10, paddingVertical: -20}}
            checkedIcon={
              <Image
                source={require('../../assets/icons/checked.png')}
                style={styles.checkBoxIcon}
              />
            }
            uncheckedIcon={
              <Image
                source={require('../../assets/icons/unchecked.png')}
                style={styles.checkBoxIcon}
              />
            }
            checked={this.state.label1}
            onPress={() => this.setState({label1: !this.state.label1})}
          />
          <Text style={styles.checkBoxDescription}>
            I understand that the ID list will be locked once I press "ODER" and
            that the labels produced will be base on the ID list as it
          </Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            containerStyle={{marginLeft: -10, paddingVertical: -20}}
            checkedIcon={
              <Image
                source={require('../../assets/icons/checked.png')}
                style={styles.checkBoxIcon}
              />
            }
            uncheckedIcon={
              <Image
                source={require('../../assets/icons/unchecked.png')}
                style={styles.checkBoxIcon}
              />
            }
            checked={this.state.label2}
            onPress={() => this.setState({label2: !this.state.label2})}
          />
          <Text style={styles.checkBoxDescription}>
            I understand that the ID list will be locked once I press "ODER" and
            that the labels produced will be base on the ID list as it
          </Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            containerStyle={{marginLeft: -10, paddingVertical: -20}}
            checkedIcon={
              <Image
                source={require('../../assets/icons/checked.png')}
                style={styles.checkBoxIcon}
              />
            }
            uncheckedIcon={
              <Image
                source={require('../../assets/icons/unchecked.png')}
                style={styles.checkBoxIcon}
              />
            }
            checked={this.state.label3}
            onPress={() => this.setState({label3: !this.state.label3})}
          />
          <Text style={styles.checkBoxDescription}>
            Order labels from the ID list section
          </Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            containerStyle={{marginLeft: -10, paddingVertical: -20}}
            checkedIcon={
              <Image
                source={require('../../assets/icons/checked.png')}
                style={styles.checkBoxIcon}
              />
            }
            uncheckedIcon={
              <Image
                source={require('../../assets/icons/unchecked.png')}
                style={styles.checkBoxIcon}
              />
            }
            checked={this.state.label4}
            onPress={() => this.setState({label4: !this.state.label4})}
          />
          <Text style={styles.checkBoxDescription}>Labels received</Text>
        </View>
        {/* <Text style={{flexDirection: 'row'}}>
          <Image
            style={{width: 200, height: 200}}
            source={require('../../assets/images/placeholder.png')}
          />
          I understand that the ID list will be locked once I press "ODER" and
          that the labels produced will be base on the ID list as it I
          understand that the ID list will be locked once I press "ODER" and
          that the labels produced will be base on the ID list as it I
          understand that the ID list will be locked once I press "ODER" and
          that the labels produced will be base on the ID list as it I
          understand that the ID list will be locked once I press "ODER" and
          that the labels produced will be base on the ID list as it I
          understand that the ID list will be locked once I press "ODER" and
          that the labels produced will be base on the ID list as it I
          understand that the ID list will be locked once I press "ODER" and
          that the labels produced will be base on the ID list as it I
          understand that the ID list will be locked once I press "ODER" and
          that the labels produced will be base on the ID list as it I
          understand that the ID list will be locked once I press "ODER" and
          that the labels produced will be base on the ID list as it I
          understand that the ID list will be locked once I press "ODER" and
          that the labels produced will be base on the ID list as it I
          understand that the ID list will be locked once I press "ODER" and
          that the labels produced will be base on the ID list as it
        </Text> */}
        <Text style={{backgroundColor: 'red'}}>
          <Image
            source={require('../../assets/images/placeholder.png')}
            style={{width: 16, height: 16}}
          />
          <Text>
            {' '}
            Your past has been in control for far too long. It's time to shift
            to a higher expression of what you are capable of so you can create
            the life you want to live.
          </Text>
        </Text>
      </Card>
    );
  }
}

export default IDListSeating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp(80),
    width: wp(70),
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