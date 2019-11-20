import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Helpers/Responsive';

import {Card} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import React from 'react';

class Attachments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
