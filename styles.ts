import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#e3e3e3"
    },
    area:{
      flex: 1,
      alignItems: "center",
      backgroundColor: "#c2c2c2"
    },
    control:{
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      margin: 20
    },

    controlText:{
      color: "#222"
    },

    controlButton: {
      flex: 1,
      height: 100,
      backgroundColor: "#0061ff",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      
    },

    textButton:{
      color: "white",
      fontWeight: "bold",
      fontSize: 18
    }

});