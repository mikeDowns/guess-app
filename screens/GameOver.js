import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import colors from "../constants/Colors";

import BodyText from "../Components/BodyText";
import TitleText from "../Components/TitleText";
import MainButton from "../Components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          // source ={require('../assets/success.png') } />
          source={{
            uri:
              "data:image/jpeg;base64,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",
          }}
        />
      </View>

      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30,
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultsContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
