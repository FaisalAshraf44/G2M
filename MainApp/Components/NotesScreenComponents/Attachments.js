import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Helpers/Responsive';

import AttachmentModal from './AttachmentModal';
import {Card} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import React from 'react';

class Attachments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attachmentModal: false,
    };
  }

  toggleAttachmentModal = () => {
    this.setState({attachmentModal: !this.state.attachmentModal});
  };

  render() {
    return (
      <Card containerStyle={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text style={styles.title}>Attachments</Text>
          <TouchableOpacity onPress={this.props.onPress}>
            <Icon
              name="plus-circle"
              type="material-community"
              color="#102A43"
              size={35}
            />
          </TouchableOpacity>
        </View>

        <Text style={{fontSize: 12, color: 'grey'}}>Patch list v.1.pdf</Text>
        <TouchableOpacity onPress={this.toggleAttachmentModal}>
          <View style={{borderWidth: 1, borderColor: 'black'}}>
            <Image
              source={require('../../assets/images/placeholder.png')}
              style={{width: 260, height: 200}}
            />
          </View>
        </TouchableOpacity>

        <Text style={{fontSize: 12, color: 'grey'}}>Patch list v.1.pdf</Text>
        <TouchableOpacity onPress={this.toggleAttachmentModal}>
          <View style={{borderWidth: 1, borderColor: 'black'}}>
            <Image
              source={require('../../assets/images/placeholder.png')}
              style={{width: 260, height: 200}}
            />
          </View>
        </TouchableOpacity>

        <AttachmentModal
          visible={this.state.attachmentModal}
          onPress={this.toggleAttachmentModal}
        />
      </Card>
    );
  }
}

export default Attachments;

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
  row: {
    flexDirection: 'row',
  },
});
