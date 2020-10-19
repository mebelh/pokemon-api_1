import {ADD_BOOKMARK, DELETE_BOOKMARK} from "./types";

const initialState = {
   ids: [],
   cards: []
}
export const bookmarksReducer = (state = initialState, action)=>{
   switch (action.type) {
      case ADD_BOOKMARK:
         return {
            ...state,
            ['ids']: [...state['ids'], action.payload.id],
            ['cards']: [...state['cards'], action.payload.data]
         }
      case DELETE_BOOKMARK:
         return {
            ...state,
            ['ids']: [...state['ids'].filter(el => {
               return el !== action.payload
            })],
            ['cards']: [...state['cards'].filter(el => {
               return el.id !== action.payload
            })]
         }
      default: return state
   }
}