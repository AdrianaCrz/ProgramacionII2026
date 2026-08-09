import { View, Text, Image, Pressable, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.contenedor}>

      <Image
        source={{
          uri: "https://i.pinimg.com/736x/d5/3c/72/d53c720b99eaf76e49d9af973aaeb1f0.jpg"
        }}
        style={styles.foto}
      />

      <Text style={styles.nombre}>
        Evelyn Adriana Ordóñez Cruz
      </Text>

      <Text style={styles.carrera}>
        Ingeniería en Sistemas
      </Text>

      <Text style={styles.carnet}>
        Carné: 0907-25-19505
      </Text>

      <Pressable style={styles.boton}>
        <Text style={styles.botonTexto}>
          VER PROYECTOS
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {    flex: 1,
                   alignItems: "flex-start",
                   justifyContent: "center",
                   padding: 16,
  },

  foto: {          width: 120,
                   height: 120,
                   borderRadius: 60,
                   marginBottom: 16,
  },

  nombre: {        fontSize: 24,
                   fontWeight: "bold",
  },

  carrera: {      fontSize: 16,
                  color: "#66169c",
                  marginTop: 4,
  },

  carnet: {       fontSize: 14,
                  color: "#b972ca",
                  marginTop: 4,
  },

  boton: {        marginTop: 20,
                  backgroundColor: "#607bf1",
                  padding: 12,
                  borderRadius: 8,
  },

  botonTexto: {   color: "white",
                  fontSize: 16,
  },
});