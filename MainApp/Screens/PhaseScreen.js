import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import IDListSeating from '../Components/PhaseScreenComponents/IdListSeating';
import PhaseListing from '../Components/PhaseScreenComponents/PhaseListing';

export default class PhaseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <PhaseListing onPress={this.props.onPress} />
          </View>
          <View>
            <IDListSeating />
          </View>
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
});
