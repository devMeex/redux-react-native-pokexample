import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ListItem } from "react-native-elements";
//Acciones para dispatch
import { getPokemonAccion, getPokemonNext } from "../reducers/pokeDucks";
import AsyncStorage from "@react-native-community/async-storage";

const PokemonList = () => {
  //const value = "UnString";
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_Key", value);
    } catch (e) {
      console.log(e);
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        console.log(value);
      }
    } catch (e) {
      console.log(value);
    }
  };
  const dispatch = useDispatch();
  //store->reducer->collecion
  const pokemones = useSelector((store) => store.pokemones.array);
  //console.log(pokemones)
  const avatar_uri =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png";
  return (
    <View>
      <Text>Pokemon List</Text>
      <TouchableOpacity onPress={() => dispatch(getPokemonAccion())}>
        <Text>Ver Pokes!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(getPokemonNext())}>
        <Text>Siguientes 20 Pokes!</Text>
      </TouchableOpacity>
      <TextInput placeholder={"Ingrese cadena"}></TextInput>
      <TouchableOpacity onPress={() => storeData("UnString")}>
        <Text>Guardar!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => getData()}>
        <Text>getData</Text>
      </TouchableOpacity>
      <FlatList
        data={pokemones}
        renderItem={({ item }) => (
          <ListItem
            leftAvatar={{
              rounded: true,
              size: "medium",
              source: { uri: avatar_uri },
            }}
            title={item.name}
            subtitle={item.url}
            bottomDivider
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default PokemonList;
