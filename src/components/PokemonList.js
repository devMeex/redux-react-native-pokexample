import React from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ListItem } from "react-native-elements";
//Acciones para dispatch
import { getPokemonAccion, getPokemonNext } from "../reducers/pokeDucks";

const PokemonList = () => {
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
