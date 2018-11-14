import React, { Component } from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import RoundedButton from "../../components/UI/Button/RoundedButton";
import bgSplash from "../../assets/bg_splash.jpg";

import startMainTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount(){
    Dimensions.removeEventListener("change",this.updateStyles);
  }

  updateStyles = (dims) => {
    this.setState({
      viewMode:
        Dimensions.get("window").height > 500 ? "portrait" : "landscape"
    });
  }

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    let headingText = null;

    if (this.state.viewMode === "portrait") {
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }
    return (
      <ImageBackground source={bgSplash} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <View style={styles.buttonContainer}>
            <RoundedButton color="black" onPress={() => alert("Hello")}>
              Switch To Login
            </RoundedButton>
          </View>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Email Address" style={styles.input} />
            <View
              style={
                this.state.viewMode === "portrait"
                  ? styles.portraitPasswordContainer
                  : styles.landScapePasswordContainer
              }
            >
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput placeholder="Password" style={styles.input} />
              </View>
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput
                  placeholder="Confirm Password"
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <RoundedButton color="black" onPress={this.loginHandler}>
              Submit
            </RoundedButton>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  buttonContainer: {
    width: "80%"
  },
  landScapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  landscapePasswordWrapper: {
    width: "45%"
  },
  portraitPasswordWrapper: {
    width: "100%"
  }
});

export default AuthScreen;
