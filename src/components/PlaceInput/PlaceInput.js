import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import DefaultInput from "../UI/DefaultInput/DefaultInput";

const placeInput = props => (
  <DefaultInput
    placeholder="Place Name"
    value={props.placeData.value}
    onChangeText={props.onChangeText}
    touched={props.placeData.touched}
    valid={props.placeData.valid}
  />
);

export default placeInput;
