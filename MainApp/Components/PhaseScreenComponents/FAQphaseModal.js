import {CheckBox, Icon} from 'react-native-elements';
import {
  Image,
  ScrollView,
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

const FAQList = [
  {qst: 'How do I know how many moving boxes we need?', ans: ''},
  {qst: 'Why do I need keep inventory over our furniture?', ans: ''},
  {
    qst: 'How do I know how many moving boxes we need?',
    ans:
      'I understand that the ID list will be locked once I press "ODER" and that the labels produced will be base on the ID list I press "ODER" and that the labels produced will be base on the ID list',
  },
  {qst: 'Why do I need keep inventory over our furniture?', ans: ''},
  {qst: 'How do I know how many moving boxes we need?', ans: ''},
  {qst: 'Why do I need keep inventory over our furniture?', ans: ''},
  {qst: 'How do I know how many moving boxes we need?', ans: ''},
];

class FAQphaseModal extends React.Component {
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
            <Text style={styles.title}>FAQ</Text>
            <View style={{width: wp(25)}}></View>

            <TouchableOpacity
              onPress={this.props.onPress}
              style={{marginRight: wp(1)}}>
              <Icon name="close" size={30} color={'grey'} />
            </TouchableOpacity>
          </View>

          <View style={styles.popUpContainer}>
            <ScrollView style={{height: hp(50)}}>
              {FAQList.map((item, key) => {
                return (
                  <View
                    style={[
                      styles.textRowContainer,
                      {backgroundColor: key % 2 == 0 ? '#DADADA' : 'white'},
                    ]}>
                    <Text style={styles.FAQText}>{item.qst}</Text>
                    {item.ans != ''
                      ? [<Text style={styles.ansText}>{item.ans}</Text>]
                      : []}
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }
}

export default FAQphaseModal;

const styles = StyleSheet.create({
  popUpContainer: {
    width: wp(60),
    flexDirection: 'column',
    paddingHorizontal: 16,
    // paddingVertical: 4,
    paddingTop: 10,
    backgroundColor: 'white',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  popUpContainer1: {
    width: wp(60),
    flexDirection: 'row',
    paddingHorizontal: 16,
    // paddingVertical: 4,
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
  textRowContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    overflow: 'hidden',
  },
  FAQText: {
    fontSize: 12,
    color: 'black',
  },
  ansText: {
    color: 'grey',
    fontSize: 10,
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
