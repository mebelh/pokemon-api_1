import {combineReducers} from "redux";
import {cardsReducer} from "./cardsReducer";
import {loadingReducer} from "./loadingReducer";
import {bookmarksReducer} from "./bookmarksReducer";
import {filterReducer} from "./filterReducer";

export const rootReducer = combineReducers(
   {
      cards: cardsReducer,
      loading: loadingReducer,
      bookmarks: bookmarksReducer,
      filter: filterReducer
   }
)