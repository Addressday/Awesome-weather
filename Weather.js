import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
  },
  Thunderstorm: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
  },
  Rain: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
  },
  Snow: {
    iconName: "weather-hail",
    gradient: ["#d39d38", "#4da0b0"],
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
  },
  Clear: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
  },
  Clouds: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Mist",
    subtitle: "Just Do it!!!!",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={100}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 36,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
