import React, {Component} from 'react';
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

import {Card} from 'react-native-elements';
import CustomHeader from '../Components/Header';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <CustomHeader />
        </View>
        <Card
          containerStyle={styles.card}
          wrapperStyle={{
            flex: 1,
            justifyContent: 'space-between',
          }}
          title="Login"
          titleStyle={{fontSize: 25}}>
          <View>
            <Text style={styles.heading}>USERNAME</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({email: text})}
            />
            <Text style={styles.heading}>PASSWORD</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({email: text})}
            />
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => this.props.navigation.navigate('App')}>
              <Text style={{color: 'white'}}>LOG IN</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{alignSelf: 'center'}}>
            <Text>I forgot my username or password</Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.3,
  },
  card: {
    width: wp(30),
    height: hp(45),
    position: 'absolute',
    top: hp(15),
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#102A43',
    alignSelf: 'center',
    position: 'absolute',
    top: 5,
  },
  heading: {
    fontSize: 12,
    color: '#102A43',
    alignSelf: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '66%',
    alignSelf: 'center',
    height: 35,
    marginVertical: 5,
  },
  loginBtn: {
    width: '22%',
    backgroundColor: '#102A43',
    paddingVertical: 7,
    borderRadius: 2,
    marginTop: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
