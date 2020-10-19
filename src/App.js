import React, {useEffect} from 'react'

import './scss/index.scss'
import SearchPanel from "./components/SearchPanel";
import FilterPanel from "./components/FilterPanel";
import Cards from "./components/Cards";
import {connect, useDispatch} from "react-redux";
import {fetchCards} from "./Redux/actions";
import Loading from "./components/Loading";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Bookmarks from "./components/Bookmarks";

function App({loading}) {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchCards())
   }, [])
   return (
      <div className="App container">
         <SearchPanel/>
         <BrowserRouter>
            <FilterPanel/>
            <Switch>
               <Route component={Cards} path='/' exact={true}/>
               <Route component={Bookmarks} path='/bookmarks' />
            </Switch>
         </BrowserRouter>
         {loading && <Loading />}
      </div>
   )
}

const mapStateToProps = ({cards, loading}) => ({
   cards: cards.cards,
   loading: loading.loading
})


export default connect(mapStateToProps, null)(App)
