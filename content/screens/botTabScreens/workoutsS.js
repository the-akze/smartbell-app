import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../../components/appHeader";
import styles from "../../../styles";
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import funcs from "../../../funcs";

console.log("ALL DATA");

export default class WorkoutScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      workoutData: {},
    };
  }

  componentDidMount() {
    this.fetchWorkouts();
  }

  fetchWorkouts = () => {
    console.log("fetching workouts");
    // var uid = firebase.auth().currentUser.uid;
    var uid = "qwertyuiop";
    var fDate = funcs.getFormattedDate();
    var path = `/workouts/users/${uid}/${fDate}/set`;
    console.log(path);
    var ref = firebase.database().ref(path);
    ref
      .get()
      .then((value) => {
        if (value.exists()) {
          this.updateData(value.val());
        } else {
          alert("Error! Data doesn't exist.");
          console.log("data not exist");
        }
      })
      .catch((reason) => {
        alert("ERROR!\n\n" + reason);
        console.log("ERROR!", reason);
      });
  };

  updateData = (data) => {
    var d = [];
    for (var i in data) {
      if (data[i].reps) {
        d.push({ ...data[i], key: i });
      }
    }
    this.setState({ workoutData: d });
  };

  render() {
    console.log(this.state.workoutData);
    return (
      <SafeAreaProvider>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <SafeAreaView style={styles.sav} />

          <AppHeader title="Workouts" />

          <TouchableOpacity
            style={[
              styles.subOptionButton,
              { margin: 0, marginTop: 0, marginBottom: 0, alignSelf: "center" },
            ]}
            onPress={this.fetchWorkouts}
          >
            <Text style={styles.subOptionButtonText}>Refresh</Text>
          </TouchableOpacity>

          <FlatList
            data={this.state.workoutData}
            keyExtractor={(item, index) => item.key}
            renderItem={this.renderWorkoutSet}
            contentContainerStyle={{flexDirection: "column-reverse"}}
          />
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    );
  }

  renderWorkoutSet = ({ item, index }) => {
    console.log("ITEM", index, item);
    return (
      <View style={styles.workoutSet}>
        <View style={{display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center"}}>
          <Text style={styles.workoutSetTitle}>SET {index + 1}</Text>
          <Text style={styles.workoutSetSubtitle}> • {Object.values(item.reps).length} reps</Text>
        </View>
        <View style={styles.workoutSetGraph}>
          {(() => {
            var l = [];
            var times = [];
            for (var i in item.reps) {
              times.push(item.reps[i].time);
            }
            for (var i in item.reps) {
              l.push(
                <View style={{flex: 1, height: item.reps[i].time * (50/Math.max(times)), backgroundColor: "dimgray", justifyContent: "flex-end", alignItems: "center"}}>
                  <Text style={{fontSize: 8, color: "white"}}>
                    {item.reps[i].time}
                  </Text>
                </View>
              );
            }
            return l;
          })()}
        </View>
      </View>
    );
  };

  signOut = async () => {
    await firebase.auth().signOut();
    this.props.parentNavigation.navigate("StartScreen");
  };
}
