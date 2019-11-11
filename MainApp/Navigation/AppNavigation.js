import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from '../Screens/Home';
import Login from '../authFlow/Login';
import SignUp from '../authFlow/Signup';
import {createStackNavigator} from 'react-navigation-stack';

const Auth = createStackNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    signup: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'login',
  },
);

const App = createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: Auth,
      App: App,
    },
    {initialRouteName: 'App'},
  ),
);
