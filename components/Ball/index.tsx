import React from "react";
import {Text, View} from "react-native";
import {style} from "./style";

type Props = {
  posY: number
}

export const Ball = ({posY} : Props) =>{
  return(
      <View style={[style.container, {bottom: posY}]}>


      </View>


  );
}