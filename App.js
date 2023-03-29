import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Alert,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Esto se encuentra dentro de una etiqueta "Text"</Text>
      <View style={styles.containerBtn}>
        <Button
          style={styles.btnAdd}
          color="#008000"
          onPress={() => Alert.alert("Agregaste + 1")}
          title="Click Me"
        />
        <Button
          style={styles.btnSub}
          color="#FF0000"
          onPress={() => Alert.alert("Mensaje de alerta!")}
          title="Click Me"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnAdd: { borderBottomColor: "#000000" },
  btnSub: { borderBottomColor: "#000000" },
  containerBtn: {
    flex: 0.04,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#800080",
    height: "50px",
  },
});
