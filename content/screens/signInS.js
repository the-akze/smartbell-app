import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../components/appHeader";
import styles from "../../styles";
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

export default class SignInScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      emailInput: "",
      passwordInput: "",
      errorMessage: "",
    };
  }

  render() {
    if (firebase.auth().currentUser)
    {
      this.props.navigation.navigate("HomeTabs");
    }
    return (
      <SafeAreaProvider>
        <KeyboardAvoidingView
          style={[styles.container, {alignItems: "center"}]}
          behavior="padding"
          enabled
        >
          <SafeAreaView style={styles.sav} />

          <AppHeader title="Sign In" />

          <TextInput
            style={styles.optionTextInput}
            placeholder="Email"
            value={this.state.emailInput}
            keyboardType="email-address"
            onChangeText={(emailInput) => {
              this.setState({ emailInput });
            }}
          />

          <TextInput
            style={styles.optionTextInput}
            placeholder="Password"
            secureTextEntry={true}
            value={this.state.passwordInput}
            onChangeText={(passwordInput) => {
              this.setState({ passwordInput });
            }}
          />

          <TouchableOpacity
            style={styles.optionButton}
            onPress={this.attemptSignIn}
          >
            <Text style={styles.optionButtonText}>Sign In</Text>
          </TouchableOpacity>

          {(() =>
            this.state.errorMessage != "" ? (
              <Text style={styles.errorText}>{this.state.errorMessage}</Text>
            ) : undefined)()}

          <TouchableOpacity
            style={styles.subOptionButton}
            onPress={() => {
              this.props.navigation.navigate("StartScreen");
            }}
          >
            <Text style={styles.subOptionButtonText}>Back</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    );
  }

  attemptSignIn = async () => {
    if (!(this.state.emailInput && this.state.passwordInput)) {
      this.setState({errorMessage: "Please enter something"})
      return;
    }

    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(
          this.state.emailInput,
          this.state.passwordInput
        );
      if (response) {
        console.log("sign in auth success");
        this.props.navigation.navigate("HomeTabs");
      }
    } catch (error) {
      console.log(error);
      console.log("sign in auth error");
      this.setState({ errorMessage: error.code });
    }
  }
}
