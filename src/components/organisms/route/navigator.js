import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  HomePage,
  LoginPage,
  LoadingPage,
  SignupContactData,
  SignupCategories,
  SignupProfessional,
  SignupLocalization,
  SignupSurvey,
  InitialPage,
} from '../../pages';

const AppStackNavigator = createStackNavigator({
  Home: HomePage,
});

const AuthStackNavigator = createStackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: {
      header: null,
    },
  },
});

const SignUpStackNavigator = createStackNavigator({
  SignupContactData: {
    screen: SignupContactData,
    navigationOptions: {
      header: null,
    },
  },
  SignupProfessional: {
    screen: SignupProfessional,
    navigationOptions: {
      header: null,
    },
  },
  SignupCategories: {
    screen: SignupCategories,
    navigationOptions: {
      header: null,
    },
  },
  SignupLocalization: {
    screen: SignupLocalization,
    navigationOptions: {
      header: null,
    },
  },
  SignupSurvey: {
    screen: SignupSurvey,
    navigationOptions: {
      header: null,
    },
  },
});

const SwitchNavigator = createSwitchNavigator(
  {
    Initial: InitialPage,
    AuthLoading: LoadingPage,
    App: AppStackNavigator,
    Auth: AuthStackNavigator,
    SignUp: SignUpStackNavigator,
  },
  {
    initialRouteName: 'Initial',
  },
);
export { SwitchNavigator };
