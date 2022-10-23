import React from "react";
import { Text } from "react-native";
import styles from '../styles'

export default function AppHeader(props) {
  return (
    <Text style={styles.headerText}>
      {props.title ? props.title : "SmartBell"}
    </Text>
  );
}
