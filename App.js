import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";

const API_KEY = "b53f1bb554352c3fb9bd4cd8abe9ed3b";

export default function App() {
  const [city, setCity] = useState("Brasilia");
  const [loading, setLoading] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  async function fetchWeather(city) {
    setLoading(true);
    setErrorMessage(null);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
    );
    const result = await res.json();
    if (result?.cod === "404") {
      setErrorMessage("Cidade não encontrada");
      setWeatherData(null);
      setLoading(false);
      return;
    }
    setWeatherData(result);
    setLoading(false);
  }

  async function fetchWeatherFromLocation() {
    setLoadingLocation(true);
    setErrorMessage(null);

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMessage("Permissão da localização negada!");
      setLoadingLocation(false);
      return;
    }
    const location = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = location.coords;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=pt_br`
    );
    const result = await res.json();
    setWeatherData(result);
    setLoadingLocation(false);
  }

  useEffect(() => {
    fetchWeather(city);
  }, []);

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d4d4d4",
      }}
    >
      <StatusBar style="auto" />

      <View
        style={{
          marginVertical: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderColor: "#777",
          borderWidth: 1,
          borderRadius: 10,
          width: 250,
        }}
      >
        <TextInput
          placeholder="Cidade"
          style={{
            backgroundColor: "#fffff",
            borderStyle: "solid",
            padding: 10,
            fontSize: 16,
            width: 200,
          }}
          value={city}
          onChangeText={setCity}
        />

        <TouchableOpacity
          onPress={() => fetchWeather(city)}
          style={{ padding: 10 }}
        >
          {loading ? (
            <ActivityIndicator color="#777" size={2} />
          ) : (
            <Feather name="search" size={24} color="#777" />
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#777",
          padding: 10,
          width: 250,
          borderRadius: 10,
          marginBottom: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={fetchWeatherFromLocation}
      >
        {loadingLocation ? (
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Carregando...
          </Text>
        ) : (
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Usar minha Localização
          </Text>
        )}
      </TouchableOpacity>

      {errorMessage && (
        <Text style={{ color: "#777", marginVertical: 20, fontSize: 16 }}>
          {errorMessage}
        </Text>
      )}

      {weatherData && (
        <>
          <Text style={{ fontSize: 16 }}>{weatherData.name}</Text>
          <Text style={{ fontSize: 25, fontWeight: "700", marginTop: 10 }}>
            {weatherData.main.temp}º
          </Text>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: `https://openweathermap.org/img/wn/${weatherData?.weather?.[0].icon}@2x.png`,
            }}
          />
        </>
      )}
    </View>
  );
}
