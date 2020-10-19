import {
   ADD_BOOKMARK,
   APPLY_FILTER, CHANGE_FILTER,
   CHANGE_SEARCH_FILTER,
   DELETE_BOOKMARK,
   HIDE_LOADING,
   PUSH_CARD,
   SHOW_LOADING
} from "./types";

const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon'

export function fetchCards(lastId = 0) {
   return async dispatch => {
      dispatch(showLoading())
      const response = await fetch(`${pokemonApiUrl}?limit=3&offset=${lastId}`)
      const json = await response.json()
      const data = json['results']

      for (const {name, url} of data) {
         const pokemonData = await fetch(url)
         const parsedPokemonData = await pokemonData.json()
         dispatch(hideLoading())
         dispatch({
            type: PUSH_CARD,
            payload: [{
               name,
               id: parsedPokemonData['id'],
               imgUrl: parsedPokemonData['sprites']['front_default']
            }]
         })
         dispatch(changeSearchFilter(''))
      }
   }
}

export function changeSearchFilter(filter = '') {
   return dispatch => {
      dispatch({
         type: CHANGE_SEARCH_FILTER,
         payload: filter
      })
      dispatch({
         type: APPLY_FILTER
      })
   }
}

export function showLoading() {
   return {
      type: SHOW_LOADING,
      payload: true
   }
}

export function hideLoading() {
   return {
      type: HIDE_LOADING,
      payload: false
   }
}

export function addBookmark(id, data) {
   return {
      type: ADD_BOOKMARK,
      payload: {
         id,
         data
      }
   }
}

export function deleteBookmark(id) {
   return {
      type: DELETE_BOOKMARK,
      payload: id
   }
}

export function changeFilter(value){
   return {
      type: CHANGE_FILTER,
      payload: value
   }
}