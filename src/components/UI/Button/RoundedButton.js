import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  StyleSheet,
  Platform
} from "react-native";

const roundedButton = props => {
  const content = (
    <View
      style={[
        styles.button,
        { backgroundColor: props.color },
        props.disabled ? styles.disabled : null
      ]}
    >
      <Text style={props.disabled ? styles.disabledText : styles.text}>{props.children}</Text>
    </View>
  );
  // if(props.disabled){
  //   return content;
  // }
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback style={styles.container} onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  button: {
    padding: 12,
    margin: 4,
    borderRadius: 24
  },
  text: {
    textAlign: "center",
    color: "#fff"
  },
  disabled: {
    padding: 12,
    margin: 4,
    borderRadius: 24,
    backgroundColor: "#bdbdbd",
  },
  disabledText: {
    textAlign: "center",
    color: "#fff"
  }
});

export default roundedButton;
