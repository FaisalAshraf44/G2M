import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../Helpers/Responsive';

import AddLineModal from './AddLineModal';
import {Card} from 'react-native-elements';
import EditLineModal from './EditLineModal';
import IDExtendedListRow from './IDExtendedListRow';
import OrderLabelModal from './OrderLabelModal';

const listItems = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

class IDExttendedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addLineModal: false,
      editLineModal: false,
      orderLabelModal: false,
    };
  }
  toggleAddLineModal = () => {
    this.setState({addLineModal: !this.state.addLineModal});
  };
  toggleEditLineModal = () => {
    this.setState({editLineModal: !this.state.editLineModal});
  };
  toggleOrderLabelModal = () => {
    this.setState({orderLabelModal: !this.state.orderLabelModal});
  };
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
          <Text style={styles.title}>ID List</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[styles.listBtn, {marginRight: 5}]}
              onPress={this.toggleAddLineModal}>
              <Text style={{color: 'white', fontSize: 12}}>ADD LINE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listBtn}
              onPress={this.toggleOrderLabelModal}>
              <Text style={{color: 'white', fontSize: 12}}>ORDER LABELS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 5}}>
          <View style={{flex: 0.3}}>
            <Text style={styles.colName}>NAME</Text>
          </View>
          <View style={{flex: 0.2}}>
            <Text style={styles.colName}>UNIQUEID</Text>
          </View>
          <View style={{flex: 0.2}}>
            <Text style={styles.colName}>BUILDING</Text>
          </View>
          <View style={{flex: 0.1}}>
            <Text style={styles.colName}>FLOOR</Text>
          </View>
          <View style={{flex: 0.1}}>
            <Text style={styles.colName}>ROOM</Text>
          </View>
          <View style={{flex: 0.1, marginLeft: 5}}>
            <Text style={styles.colName}>GRID</Text>
          </View>
          <View style={{flex: 0.2}}>
            <Text style={styles.colName}>NEW BUILDING</Text>
          </View>
          <View style={{flex: 0.1}}>
            <Text style={styles.colName}>NEW FLOOR</Text>
          </View>
          <View style={{flex: 0.1}}>
            <Text style={styles.colName}>NEW ROOM</Text>
          </View>
          <View style={{flex: 0.1}}>
            <Text style={styles.colName}>NEW GRID</Text>
          </View>
          <View style={{width: wp(9)}}></View>
        </View>
        <ScrollView style={{marginHorizontal: -16, height: hp(67)}}>
          {listItems.map((item, key) => {
            return (
              <IDExtendedListRow
                onPress={this.toggleEditLineModal}
                key={key}
                color={key % 2 == 0 ? '#DADADA' : 'white'}
              />
            );
          })}
        </ScrollView>
        <AddLineModal
          visible={this.state.addLineModal}
          onPress={this.toggleAddLineModal}
        />
        <EditLineModal
          visible={this.state.editLineModal}
          onPress={this.toggleEditLineModal}
        />
        <OrderLabelModal
          visible={this.state.orderLabelModal}
          onPress={this.toggleOrderLabelModal}
        />
      </Card>
    );
  }
}

export default IDExttendedList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
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
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#102A43',
    borderRadius: 2,
  },
});
