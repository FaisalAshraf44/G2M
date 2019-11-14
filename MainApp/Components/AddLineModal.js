import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../Helpers/Responsive';

import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import React from 'react';

const AddLineModal = props => {
  return (
    <Modal
      isVisible={props.visible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropColor="black"
      animationInTiming={250}
      animationOutTiming={250}
      backdropOpacity={0.5}
      // onBackdropPress={toggleAddLineModal}
    >
      <View style={{alignSelf: 'center'}}>
        <View style={styles.popUpTop}>
          <Text style={styles.title}>Add line</Text>
          <View style={{width: wp(25)}}></View>

          <TouchableOpacity
            onPress={props.onPress}
            style={{marginRight: wp(1)}}>
            <Icon name="close" size={30} color={'grey'} />
          </TouchableOpacity>
        </View>

        <View style={styles.popUpContainer}>
          <View>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={[styles.textInput, {width: wp(20)}]}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={styles.label}>Unique ID</Text>
            <TextInput
              style={[styles.textInput, {width: wp(6)}]}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
        </View>
        <View style={styles.popUpContainer}>
          <View>
            <Text style={styles.label}>Building</Text>
            <TextInput
              style={[styles.textInput, {width: wp(11)}]}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={styles.label}>Floor</Text>
            <TextInput
              style={[styles.textInput, {width: wp(11)}]}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={styles.label}>Room</Text>
            <TextInput
              style={[styles.textInput, {width: wp(11)}]}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={styles.label}>Grid</Text>
            <TextInput
              style={[styles.textInput, {width: wp(11)}]}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
        </View>
        <View style={styles.popUpContainer}>
          <View>
            <Text style={styles.label}>New building</Text>
            <TextInput
              style={[styles.textInput, {width: wp(11)}]}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={styles.label}>New floor</Text>
            <TextInput
              style={[styles.textInput, {width: wp(11)}]}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={styles.label}>New room</Text>
            <TextInput
              style={[styles.textInput, {width: wp(11)}]}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={styles.label}>New grid</Text>
            <TextInput
              style={[styles.textInput, {width: wp(11)}]}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
        </View>
        <View style={[styles.popUpContainer, {justifyContent: 'flex-end'}]}>
          <TouchableOpacity style={styles.listBtn} onPress={props.onPress}>
            <Text style={{color: 'white', fontSize: 12}}>CREATE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddLineModal;

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
  },
  listBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#102A43',
    borderRadius: 2,
    marginTop: hp(10),
    marginRight: 20,
    marginBottom: 20,
  },
});
