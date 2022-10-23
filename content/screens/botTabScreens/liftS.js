import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../../components/appHeader";
import styles from "../../../styles";
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import funcs from "../../../funcs";

export default class LiftScreen extends React.Component {
  constructor() {
    super();
    
    this.state = {
      data: {},
      reps: 0
    }

    this.dbRef = null;
  }
  
  componentDidMount() {
    // var uid = firebase.auth().currentUser.uid;
    var uid = "qwertyuiop";
    var fDate = funcs.getFormattedDate();
    this.dbRef = firebase.database().ref(`/workouts/users/${uid}/${fDate}/set`);
    this.dbRef.on("value", this.onGetData);
  }

  componentWillUnmount() {
    if (this.dbRef) {
      this.dbRef.off("value", this.onGetData);
    }
  }
  
  onGetData = (data) => {
    if (data.exists()) {
      this.processData(data.val());
    }
    else {
      alert("ERROR!\n\nUnable to receive realtime lift data.");
    }
    // this.setState(data);
  }
  
  processData = (data) => {
    var l = Object.values(data);
    var currentSet = l[l.length - 1];
    if (!currentSet.reps) {
      this.setState({data: {}, reps: 0});
      return;
    }
    console.log("currentSet.reps", currentSet.reps);
    this.setState({reps: Object.values(currentSet.reps).length, data: currentSet});
  }

  getPreviousSet = () => {
    if (this.state.reps == 0) {
      return NaN;
    }
    var prev = this.state.data.reps["r" + (this.state.reps).toString()].time;
    return prev;
  }

  setsAgo = (amt) => {
    if (this.state.reps == 0) {
      return NaN;
    }
    if (this.state.reps - amt <= 0) {
      return NaN;
    }
    var r = this.state.data.reps["r" + (this.state.reps - amt).toString()].time;
    return r;
  }

  checkImprovementInLastSet = () => {
    if (this.state.reps == 0) {
      return NaN;
    }
    var prev = this.getPreviousSet();
    var beforePrev = this.setsAgo(1);
    return prev > beforePrev;
  }

  render() {
    console.log(this.state.reps);
    return (
      <SafeAreaProvider>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <SafeAreaView style={styles.sav} />

          <AppHeader title="Lift" />

          {(() => {
            if (this.state.reps <= 0) {
              return;
            }
            return <Text style={styles.labelText}>Rep {this.state.reps} took {this.getPreviousSet()} sec</Text>
          })()}

          {(() => {
            if (this.state.reps <= 0) {
              return <Text style={styles.labelText}>Do your first rep!</Text>
            }
            if (this.state.reps <= 1) {
              return <Text style={styles.labelText}>Do another rep!</Text>
            }
            return <Text style={styles.labelText}>{this.checkImprovementInLastSet() ? "That was better than rep " + (this.state.reps - 1).toString() + "!" : "You can do better!"}</Text>
          })()}

          {(() => {
            // if (this.state.reps >= 9) {
            //   return <Text style={styles.lastRepText}>Final Rep</Text>
            // }
            return (
            <View style={styles.bigRepContainer}>
              <Text style={styles.lastRepText}>REP</Text>
              <Text style={styles.bigRepText}>{this.state.reps + 1}</Text>
            </View>
            )
          })()}
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    );
  }

  signOut = async () => {
    await firebase.auth().signOut();
    this.props.parentNavigation.navigate("StartScreen");
  };
}
