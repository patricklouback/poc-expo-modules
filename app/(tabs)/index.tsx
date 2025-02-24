import { StyleSheet, View, Text, Button } from "react-native";
import * as Settings from "@/modules/expo-settings";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [theme, setTheme] = useState(Settings.getTheme());

  useEffect(() => {
    Settings.addThemeListener((event) => {
      setTheme(event.theme);
    });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme === "light" ? "white" : "black" }]}>
      <Text style={[styles.title, { color: theme === "light" ? "black" : "white" }]}>Tema: {theme.toUpperCase()}</Text>
      <Button title="Mudar tema" onPress={() => {
        Settings.setTheme(theme === "light" ? "dark" : "light");
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
