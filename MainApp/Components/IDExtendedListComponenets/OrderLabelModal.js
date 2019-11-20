import {CheckBox, Icon} from 'react-native-elements';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Helpers/Responsive';

import Modal from 'react-native-modal';
import React from 'react';

class OrderLabelModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  render() {
    return (
      <Modal
        isVisible={this.props.visible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropColor="black"
        animationInTiming={250}
        animationOutTiming={250}
        backdropOpacity={0.5}>
        <View style={{alignSelf: 'center'}}>
          <View style={styles.popUpTop}>
            <Text style={styles.title}>Order labels</Text>
            <View style={{width: wp(25)}}></View>

            <TouchableOpacity
              onPress={this.props.onPress}
              style={{marginRight: wp(1)}}>
              <Icon name="close" size={30} color={'grey'} />
            </TouchableOpacity>
          </View>

          <View style={styles.popUpContainer}>
            <Text style={styles.headingRed}>
              When ordering labels your ID list gets locked until production has
              completed
            </Text>
          </View>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              checkedIcon={
                <Image source={require('../../assets/icons/checked.png')} />
              }
              uncheckedIcon={
                <Image source={require('../../assets/icons/unchecked.png')} />
              }
              checked={this.state.checked}
              onPress={() => this.setState({checked: !this.state.checked})}
            />
            <Text style={{marginLeft: -12, color: '#102A43', fontSize: 12}}>
              I understand that the ID list will be locked once I press "ODER"
              and that the labels produced will be base on the ID list as it
            </Text>
          </View>

          <View style={[styles.popUpContainer, {justifyContent: 'flex-end'}]}>
            <TouchableOpacity
              style={styles.OrderLabelBtn}
              onPress={this.props.onPress}>
              <Text style={{color: 'white', fontSize: 14}}>ORDER LABELS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

export default OrderLabelModal;

const styles = StyleSheet.create({
  popUpContainer: {
    width: wp(60),
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: 'white',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  checkBoxContainer: {
    width: wp(60),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    backgroundColor: 'white',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  popUpTop: {
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    height: hp(7),
    width: wp(60),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#102A43',
  },
  headingRed: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 20,
  },
  OrderLabelBtn: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#102A43',
    borderRadius: 4,
    marginTop: hp(10),
    marginRight: 20,
    marginBottom: 20,
  },
});
