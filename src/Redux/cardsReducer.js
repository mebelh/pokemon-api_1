import {APPLY_FILTER, CHANGE_SEARCH_FILTER, PUSH_CARD} from "./types";

const initialState = {
   cards: [],
   showCards: [],
   filter: '',
}

export const cardsReducer = (state = initialState, action) => {
   switch (action.type){
      case PUSH_CARD:
         return {...state, cards: [...state.cards, ...action.payload]}
      case CHANGE_SEARCH_FILTER:
         return {...state, filter: action.payload}
      case APPLY_FILTER:
         if(!state.filter.trim().length){
            return {...state, showCards: state.cards}
         }
         const showCards = state.cards.filter(pokemon => ~pokemon.name.indexOf(state.filter))
         return {...state, showCards}
      default: return state
   }
}