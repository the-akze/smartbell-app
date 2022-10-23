import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import LiftScreen from "../screens/botTabScreens/liftS";
import WorkoutScreen from "../screens/botTabScreens/workoutsS";
import AccountScreen from "../screens/botTabScreens/accountScreen";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

var BotTabNav = createBottomTabNavigator();

var AccScreen;

export default class BotTabNavigator extends React.Component {
  componentDidMount() {
    AccScreen = <AccountScreen parentNavigation={this.props.navigation} />;
  }

  render() {
    return (
      <BotTabNav.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
              
              switch (route.name) {
                case "Workouts":
                  iconName = focused ? "analytics" : "analytics-outline"
                  break;
                
                case "Lift":
                  iconName = focused ? "barbell" : "barbell-outline"
                  break;
                
                case "Account":
                  iconName = focused ? "person" : "person-outline"
                  break;
              
                default:
                  break;
              }

              var c = focused ? color : "#00000055"
              
              return <Ionicons name={iconName} color={c} size={24} style={[styles.icons]} />;
          }
        })}
      >
        <BotTabNav.Screen name="Workouts" component={WorkoutScreen} />
        <BotTabNav.Screen name="Lift" component={LiftScreen} />
        <BotTabNav.Screen name="Account" component={() => AccScreen} />
      </BotTabNav.Navigator>
    );
  }
}
