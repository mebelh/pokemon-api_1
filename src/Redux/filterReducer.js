import {CHANGE_FILTER} from "./types";

const href = window.location.href.split('/')

const initialState = {
   filters: [
      {
         label: 'Результаты поиска',
         value: 'search results'
      },
      {
         label: 'Закладки',
         value: 'bookmarks'
      }
   ],
   active: href.includes('bookmarks') ? 'bookmarks' : 'search results'
}

console.log(window.location.href.split('/'))

export const filterReducer = (state = initialState, action) => {
   switch (action.type) {
      case CHANGE_FILTER:
         return {
            ...state,
            ['active']: action.payload
         }
      default: return state
   }
}