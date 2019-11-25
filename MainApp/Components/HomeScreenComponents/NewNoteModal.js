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
} from '../../Helpers/Responsive';

import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import React from 'react';
import DocumentPicker from 'react-native-document-picker';

const AttachFile = async () => {
  alert('hello');
  // return(
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    console.log(
      res.uri,
      res.type, // mime type
      res.name,
      res.size,
    );
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the picker, exit any dialogs or menus and move on
    } else {
      throw err;
    }
  }
  // )
};
const NewNoteModal = props => {
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
          <Text style={styles.title}>New note</Text>
          <View style={{width: wp(25)}}></View>

          <TouchableOpacity
            onPress={props.onPress}
            style={{marginRight: wp(1)}}>
            <Icon name="close" size={30} color={'grey'} />
          </TouchableOpacity>
        </View>

        <View style={styles.popUpContainer}>
          <TextInput
            style={[styles.textInput, {width: wp(57), height: wp(12)}]}
            onChangeText={text => this.setState({email: text})}
            multiline={true}
          />
        </View>

        <View style={styles.popUpContainer}>
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
          <TouchableOpacity style={styles.browseBtn} onPress={() => AttachFile}>
            <Text style={{color: 'white', fontSize: 12}}>Browse</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.popUpContainer}>
          <View>
            <Text style={[styles.label, {marginTop: 10}]}>Attach files:</Text>
            <Text style={{fontSize: 12, color: 'grey'}}>
              Patch list v.1.pdf
            </Text>
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

export default NewNoteModal;

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
  browseBtn: {
    paddingHorizontal: 16,
    // paddingVertical: 4,
    backgroundColor: '#102A43',
    borderRadius: 2,
    marginTop: 18,
    marginBottom: 4,
    marginLeft: -2,
    justifyContent: 'center',
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
