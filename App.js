import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import axios from "axios";
import * as Location from "expo-location";
import { thistle } from "color-name";

const API_KEY = "e3fc4f0b1ff9b581459527147568ed16";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        main: { temp_max },
        main: { temp_min },
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({ condition: weather[0].main, temp, temp_max, temp_min });
  };

  getLocation = async () => {
    try {
      await Location.requestBackgroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you");
    }
  };

  componentDidMount() {
    this.getLocation();
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }

  render() {
    const { isLoading, temp, temp_max, temp_min, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather
        temp={Math.round(temp)}
        temp_max={Math.round(temp_max)}
        temp_min={Math.round(temp_min)}
        condition={condition}
      />
    );
  }
}
