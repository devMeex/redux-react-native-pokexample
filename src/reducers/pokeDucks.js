import axios from "axios";
import { getAppLoadingLifecycleEmitter } from "expo/build/launch/AppLoading";
//constantes

const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS";
const GET_POKEMON_NEXT_SUCCESS = "GET_POKEMON_NEXT_SUCCESS";

const initialState = {
  array: [],
  offset: 0
};
//reducers
export default function pokeReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        array: payload,
      };
    case GET_POKEMON_NEXT_SUCCESS:
      return {
        ...state,
        array: payload.array,
        offset: payload.offset
      };
    default:
      return state;
  }
}
//acciones

export const getPokemonAccion = () => async (dispatch) => {
  try {
    const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
    const res = await axios.get(`${URL}`);
    
    dispatch({
      type: GET_POKEMON_SUCCESS,
      payload: res.data.results,
    });
    console.log(res.data.results);
  
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonNext = () => async (dispatch, getState) => {
  try {
    const offset = getState().pokemones.offset; //Obtengo el valor actual desde mi store
    const limit = 20; //Muestro de a 20 pokes
    
    const next = offset + 20; // Increment para mostrar los sig pokes
    const URI = `https://pokeapi.co/api/v2/pokemon?offset=${next}&limit=${limit}`;
    const res = await axios.get(`${URI}`);
    
    dispatch({
      type: GET_POKEMON_NEXT_SUCCESS,
      payload: {
        array:res.data.results,
        offset: next
      }
    });
    console.log(res.data.results);
  } catch (error) {
    console.log(error);
  }
};
