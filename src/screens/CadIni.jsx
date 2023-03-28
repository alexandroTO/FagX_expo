// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import AvatarF from "../../assets/escolha-tela/avatarF.svg";
import AvatarM from "../../assets/escolha-tela/avatarH.svg";
import AvatarF_Blue from "../../assets/avatarm/avatarF_blue.svg";
import AvatarM_Blue from "../../assets/avatarm/avatarH_blue.svg";
import AvatarF_Red from "../../assets/avatarf/avatarF_red.svg";
import AvatarM_Red from "../../assets/avatarf/avatarH_red.svg";

import { primeiro_cadastro, check_cadastro } from "../utils/sqLite";

const styles = StyleSheet.create({
  Corpo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    margin: 12,
    width: "80%",
    borderWidth: 0,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    textAlign: "center",
  },
});

export default function CadIni({ navigation }) {
  const [avatar, setAvatar] = useState("");
  const [nome, setNome] = useState("");
  const [fone, setFone] = useState("");
  const inicial = () => {
    if (nome === "" || fone === "") {
      alert("você deve entrar com seus dados");
    } else if (avatar === "") {
      alert("Selecione seu avatar");
    } else if (nome !== "" && avatar !== "" && fone !== "") {
      primeiro_cadastro(nome, fone).then((rs) => {
        if (rs) {
          navigation.navigate("Dashboard");
        }
      });
    }
  };
  useEffect(() => {
    check_cadastro().then((rs)=>{
        
        if(rs){
            navigation.navigate("Dashboard");  
        }
    });
    
  }, []);
  return (
    <SafeAreaView style={styles.Corpo}>
      <View
        style={{
          backgroundColor:
            avatar === ""
              ? "#7B797A"
              : avatar === "Masculino"
              ? "#6AC5C6"
              : "#e1004a",
          height: "100%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {avatar === "" && (
            <>
              <AvatarM
                width="150"
                height="150"
                onPress={() => {
                  setAvatar("Masculino");
                }}
              />
              <AvatarF
                width="150"
                height="150"
                onPress={() => {
                  setAvatar("feminino");
                }}
              />
            </>
          )}
          {avatar === "Masculino" && (
            <>
              <AvatarM_Blue
                width="150"
                height="150"
                onPress={() => {
                  setAvatar("Masculino");
                }}
              />
              <AvatarF_Blue
                width="150"
                height="150"
                onPress={() => {
                  setAvatar("feminino");
                }}
              />
            </>
          )}
          {avatar === "feminino" && (
            <>
              <AvatarM_Red
                width="150"
                height="150"
                onPress={() => {
                  setAvatar("Masculino");
                }}
              />
              <AvatarF_Red
                width="150"
                height="150"
                onPress={() => {
                  setAvatar("feminino");
                }}
              />
            </>
          )}
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <TextInput
            onChangeText={setNome}
            value={nome}
            style={styles.input}
            placeholder="Nome:"
          />
          <TextInput
            onChangeText={setFone}
            value={fone}
            style={styles.input}
            placeholder="Fone:"
          />
          <Button
            title="Entrar"
            color={
              avatar === ""
                ? "#7B797A"
                : avatar === "Masculino"
                ? "#226D67"
                : "#651435"
            }
            onPress={inicial}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
