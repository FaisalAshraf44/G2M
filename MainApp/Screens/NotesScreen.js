import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../Helpers/Responsive';

import Attachments from '../Components/NotesScreenComponents/Attachments';
import {Card} from 'react-native-elements';
import NoteDescription from '../Components/NotesScreenComponents/NoteDescriptionCard';
import NotesListing from '../Components/NotesScreenComponents/NotesListing';

export default class NotesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <NotesListing onPress={this.props.onPress} />
          </View>
          <View>
            <NoteDescription />
            <Card containerStyle={{width: wp(40)}}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={styles.heading}>Deadline</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({email: text})}
                  />
                </View>
                <View>
                  <Text style={styles.heading}>Responsible</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({email: text})}
                  />
                </View>
              </View>
            </Card>
          </View>
          <Attachments />
        </View>
      </View>
    );
  }
}

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
  heading: {
    fontSize: 10,
    color: '#102A43',
    fontWeight: '600',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: wp(18),
    height: 35,
    marginVertical: 5,
  },
});
