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

export default class AccountScreen extends React.Component {
  constructor() {
    super();
    
    this.state = {
      signedIn: Boolean(firebase.auth().currentUser),
    }
  }
  componentDidMount() {
    if (!firebase.auth().currentUser) {
      this.signOut();
    }
  }
  render() {
    return (
      <SafeAreaProvider>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <SafeAreaView style={styles.sav} />

          <AppHeader title="Account" />

          <Text style={[styles.subText, {marginTop: 100}]}>
            {firebase.auth().currentUser.email}
          </Text>

          <View style={styles.optionButtonsContainer}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={this.signOut}
            >
              <Text style={styles.optionButtonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    );
  }

  signOut = async () => {
    await firebase.auth().signOut();
    this.props.parentNavigation.navigate("StartScreen");
  };
}
