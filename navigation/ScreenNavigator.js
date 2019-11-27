import {createStackNavigator} from 'react-navigation'

import SelectRoutineScreen from '../screens/SelectRoutineScreen'
import HomeScreen from '../screens/HomeScreen'
import BuildRoutineScreen from '../screens/BuildRoutineScreen'
import StartRoutineScreen from '../screens/StartRoutineScreen'
import InProgressScreen from '../screens/InProgressScreen'
import SignupScreen from '../screens/SignupScreen'
import ClassesScreen from '../screens/ClassesScreen'
import PreviousRoutine from '../screens/PreviousRoutine'

const ScreenNavigator = createStackNavigator({
  SelectRoutineScreen,
  HomeScreen,
  BuildRoutineScreen,
  StartRoutineScreen,
  InProgressScreen,
  SignupScreen,
  ClassesScreen,
  PreviousRoutine

},{headerMode:'none'})

export default ScreenNavigator
