// @ts-nocheck
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Red from "../../assets/index/centro-fag-experience.svg";
import Fagx from "../../assets/index/fagx.svg";
import LogoFag from "../../assets/index/logo-fag.svg";
import { init } from "../utils/sqLite";
import { getData } from "../utils/storage";
import FadeInView from "../components/FadeInView ";
const styles = StyleSheet.create({
  corpo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
  },
});

function Load({ navigation }) {
  setTimeout(() => {
    navigation.navigate("Escolha");
  }, 3000);

  useEffect(() => {
    init();
    getData().then((data) => {
      if (data === "Aceito") {
      }
    });
  }, []);

  return (
    <View style={styles.corpo}>
      <View style={{ marginTop: "20%" }}>
        <FadeInView duration="3500">
          <Fagx width={350} height={250} />
        </FadeInView>
      </View>
      <View style={{ alignItems: "center" }}>
        {/* <FadeInView duration="4000">
          <LogoFag width={150} height={250} />
        </FadeInView> */}
        <FadeInView duration="5000">
          <Red width={250} height={70} />
        </FadeInView>
      </View>
    </View>
  );
}
export default Load;
