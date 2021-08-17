import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import WrappedText from "react-native-wrapped-text";

const weatherOptions = {
  Thunderstorm: {
    name: "thunderstorm",
    ko: "뇌우",
    color: ["#434343", "#000000"],
    title: "천둥번개를 동반한 비 ",
    subTitle:
      "집 밖으로 나가면 물에 젖은 생쥐 꼴이 되거나 벼락맞아 죽기 십상임. 되도록 집에서 티비만 볼 것. 그래도 나가야 한다면 높은 곳은 피해서 다녀야 함. ",
  },

  Drizzle: {
    name: "rainy",
    ko: "가랑비",
    color: ["#bdc3c7", "#2c3e50"],
    title: "가랑비에 옷 젖는다 ",
    subTitle:
      "라는 말이 있듯이, 우습게 봤다간 큰 코 다치기 때문에 반드시 우산을 챙겨야 함. 또한, 가랑비가 장대비로 갑자기 바뀌는 경우도 있기 때문에 우산은 필수라고 볼 수 있음. ",
  },

  Rain: {
    name: "rainy",
    ko: "비",
    color: ["#4b79a1", "#283e51"],
    title: "Rainism ",
    subTitle:
      "우산 필수. 강수량과 풍속에 따라 발목부터 젖어 올라오는 길이가 달라짐. 꼭 물에 젖어도 되는 신발을 신을 것. ",
  },

  Snow: {
    name: "snow",
    ko: "눈",
    color: ["#00d2ff", "#928dab"],
    title: "겨울왕국 ",
    subTitle:
      "어릴 땐 겨울에 눈이 오기만을 오매불망 기다렸지만 군대를 다녀온 후에는 예쁜 쓰레기라는 것을 깨달은 후 별 감흥은 없다. 많이 오면 재미로 눈싸움 혹은 눈사람 만들기 가능. ",
  },

  Clear: {
    name: "sunny",
    ko: "맑음",
    color: ["#6dd5ed", "#2193b0"],
    title: "화창함 ",
    subTitle:
      "한강으로 데이트가서 라면 한사발 하기 딱 좋을 날씨. 그러나 여름이면 그냥 집 근처 은행이나 카페로 피서 가는 것을 추천. 라면 국물인지 혹은 땀인지 모르게 되는 경우가 생김. ",
  },

  Clouds: {
    name: "cloud",
    ko: "구름",
    color: ["#bdc3c7", "#2c3e50"],
    title: "흐리디 흐림 ",
    subTitle:
      "개인적으로 비 오기 전의 이런 애매한 날씨를 좋아하는 편이지만 딱 거기 까지. 비가 오는 순간부터 급속도로 우울해짐. 하지만 이 순간만은 시원하고 좋다. ",
  },

  Mist: {
    name: "menu",
    ko: "안개",
    color: ["#d0d8dc", "#8e9eab"],
    title: "앞이 안보임 ",
    subTitle:
      "심할 경우 걷거나 자전거 타는게 운전 하는 것보다 빠를 수도 있음. ㅋ 학창 시절엔 이런 고독한 느낌의 날씨를 굉장히 좋아했음. 지금도 나쁘지 않다고 생각함. ㅋ ",
  },

  Smoke: {
    name: "menu",
    ko: "황사",
    color: ["#DECBA4", "#3E5151"],
    title: "중국 ",
    subTitle:
      "마스크 필수. 마스크를 사용하지 않고 밖에서 호흡을 할 경우 먼 훗날 자신의 폐에 들어 있는 것이 폐포인지 모래 먼지인지 가늠할 수 없을 수도 있음. Fuck China. ",
  },

  Haze: {
    name: "menu",
    ko: "안개",
    color: ["#d0d8dc", "#8e9eab"],
    title: "앞이 안보임 ",
    subTitle:
      "심할 경우 걷거나 자전거 타는게 운전 하는 것보다 빠를 수도 있음. ㅋ 학창 시절엔 이런 고독한 느낌의 날씨를 굉장히 좋아했음. 지금도 나쁘지 않다고 생각함. ㅋ ",
  },

  Dust: {
    name: "menu",
    ko: "미세먼지",
    color: ["#DECBA4", "#3E5151"],
    title: "중국 ",
    subTitle:
      "마스크 필수. 마스크를 사용하지 않고 밖에서 호흡을 할 경우 먼 훗날 자신의 폐에 들어 있는 것이 폐포인지 모래 먼지인지 가늠할 수 없을 수도 있음. Fuck China. ",
  },

  Fog: {
    name: "menu",
    ko: "안개",
    color: ["#d0d8dc", "#8e9eab"],
    title: "앞이 안보임 ",
    subTitle:
      "심할 경우 걷거나 자전거 타는게 운전 하는 것보다 빠를 수도 있음. ㅋ 학창 시절엔 이런 고독한 느낌의 날씨를 굉장히 좋아했음. 지금도 나쁘지 않다고 생각함. ㅋ ",
  },

  Sand: {
    name: "menu",
    ko: "황사",
    color: ["#DECBA4", "#3E5151"],
    title: "중국 ",
    subTitle:
      "마스크 필수. 마스크를 사용하지 않고 밖에서 호흡을 할 경우 먼 훗날 자신의 폐에 들어 있는 것이 폐포인지 모래 먼지인지 가늠할 수 없을 수도 있음. Fuck China. ",
  },
};

export default function Weather({ temp, temp_max, temp_min, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].color}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.upHalfContainer}>
        <Ionicons style={styles.icon} name={weatherOptions[condition].name} />
        <Text style={styles.condition}>{weatherOptions[condition].ko}</Text>
        <Text style={styles.temp}>
          {temp}
          <Text style={styles.celsius}> °C</Text>
        </Text>
        <Text style={styles.tempDetail}>
          최고:{temp_max}° 최저:{temp_min}°
        </Text>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.titleBox}>
          <WrappedText textStyle={styles.title}>
            {weatherOptions[condition].title}
          </WrappedText>
        </View>
        <WrappedText textStyle={styles.subTitle}>
          {weatherOptions[condition].subTitle}
        </WrappedText>
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
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    color: "white",
    fontSize: 90,
    marginTop: 80,
  },

  upHalfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  condition: {
    fontSize: 20,
    opacity: 0.8,
    marginTop: 5,
    color: "white",
  },

  temp: {
    fontSize: 32,
    marginTop: 10,
    color: "white",
    fontWeight: "700",
  },

  celsius: {
    fontSize: 24,
  },

  tempDetail: {
    marginTop: 10,
    color: "white",
    opacity: 0.8,
  },

  titleBox: {
    marginBottom: 50,
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "300",
  },

  subTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },

  textContainer: {
    flex: 1,
    alignItems: "flex-start",
    top: 80,
    paddingHorizontal: 50,
  },
});
