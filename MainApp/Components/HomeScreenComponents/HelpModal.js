import {
  Picker,
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

import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import React from 'react';

const FAQList = [
  { qst: 'How do I know how many moving boxes we need?', ans: '' },
  { qst: 'Why do I need keep inventory over our furniture?', ans: '' },
  {
    qst: 'How do I know how many moving boxes we need?',
    ans:
      'I understand that the ID list will be locked once I press "ODER" and that the labels produced will be base on the ID list I press "ODER" and that the labels produced will be base on the ID list',
  },
  { qst: 'Why do I need keep inventory over our furniture?', ans: '' },
  { qst: 'How do I know how many moving boxes we need?', ans: '' },
  { qst: 'Why do I need keep inventory over our furniture?', ans: '' },
  { qst: 'How do I know how many moving boxes we need?', ans: '' },
];

const HelpModal = props => {
  return (
    <Modal
      isVisible={props.visible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropColor="black"
      animationInTiming={250}
      animationOutTiming={250}
      backdropOpacity={0.5}>
      <View style={{ alignSelf: 'center' }}>
        <View style={styles.popUpTop}>
          <Text style={styles.title}>Help & support</Text>
          <View
            style={{
              flexDirection: 'row',
              width: '72%',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.title}>FAQ</Text>
            <TouchableOpacity
              onPress={props.onPress}
              style={{ marginRight: wp(1) }}>
              <Icon name="close" size={30} color={'grey'} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.popUpContainer}>
          <View style={{ width: '25%' }}>
            <View>
              <Text style={styles.label}>Attach a file</Text>
              <View
                style={{ borderWidth: 1, borderColor: 'black', width: wp(14) }}>
                <Picker
                  style={{ height: 40, width: wp(14), borderWidth: 2, borderColor: 'black' }}>
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
              </View>
            </View>
            <View>
              <Text style={styles.label}>Your question / request</Text>
              <TextInput
                style={[styles.textInput, { width: wp(14), height: wp(12) }]}
                onChangeText={text => this.setState({ email: text })}
                multiline={true}
              />
            </View>
            <View>
              <Text style={styles.label}>Attach a file</Text>
              <View style={{ flexDirection: 'row', width: wp(14) }}>
                <TextInput
                  style={[styles.textInput, { width: wp(8.5) }]}
                  onChangeText={text => this.setState({ email: text })}
                />
                <TouchableOpacity style={styles.browseBtn}>
                  <Text style={{ color: 'white', fontSize: 12 }}>Browse</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity style={styles.listBtn} onPress={props.onPress}>
                <Text style={{ color: 'white', fontSize: 12 }}>SEND</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 22, width: '70%', marginLeft: 20 }}>
            <ScrollView style={{ height: hp(50) }}>
              {FAQList.map((item, key) => {
                return (
                  <View
                    style={[
                      styles.textRowContainer,
                      { backgroundColor: key % 2 == 0 ? '#DADADA' : 'white' },
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

        {/* <View style={styles.popUpContainer}>
          <View>
            <Text style={styles.label}>Deadline</Text>
            <TextInput
              style={[styles.textInput, {width: wp(14)}]}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={styles.label}>Responsible</Text>
            <TextInput
              style={[styles.textInput, {width: wp(14)}]}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={styles.label}>Attach a file</Text>
            <TextInput
              style={[styles.textInput, {width: wp(11)}]}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
          <TouchableOpacity style={styles.browseBtn}>
            <Text style={{color: 'white', fontSize: 12}}>Browse</Text>
          </TouchableOpacity>
        </View> */}
        {/* <View style={styles.popUpContainer}>
          <View>
            <Text style={[styles.label, {marginTop: 10}]}>Attach files:</Text>
            <Text style={{fontSize: 12, color: 'grey'}}>
              Patch list v.1.pdf
            </Text>
          </View>
        </View> */}
        {/* <View style={[styles.popUpContainer, {justifyContent: 'flex-end'}]}>
          <TouchableOpacity style={styles.listBtn} onPress={props.onPress}>
            <Text style={{color: 'white', fontSize: 12}}>CREATE</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </Modal>
  );
};

export default HelpModal;

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
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#102A43',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '20%',
    height: 35,
    marginVertical: 5,
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#102A43',
    marginTop: 10,
  },
  textRowContainer: {
    flex: 1,
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
  browseBtn: {
    paddingHorizontal: 16,
    backgroundColor: '#102A43',
    borderRadius: 2,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: -2,
    justifyContent: 'center',
  },
  listBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#102A43',
    borderRadius: 2,
    marginTop: hp(8),
    marginBottom: 20,
  },
});
