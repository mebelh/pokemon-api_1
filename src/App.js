import React, {useEffect, useState} from 'react'

import './scss/index.scss'
import SearchPanel from "./components/SearchPanel";
import FilterPanel from "./components/FilterPanel";
import Card from "./components/Card";
import useHttp from "./hooks/http.hook";

function App() {
   const [data, setData] = useState(null)
   const {request} = useHttp()
   useEffect(() => {
      request('https://pokeapi.co/api/v2/pokemon?limit=4&offset=1').then(d => {
         const pokemons = d['results'].map(({name, url}) => {
            request(url).then()
            return {
               name,
               url
            }
         })
         setData(pokemons)
      })
   }, [])

   const cards = data && data.map(({name, url}) => {
      return <Card title={name} url={url} />
   })
   console.log(data)

   return (
      <div className="App container">
         <SearchPanel/>
         <FilterPanel/>
         {cards}
         <div className='center-all mt-sm'>
            <button className='btn'>Загрузить еще...</button>
         </div>
      </div>
   )
}

export default App;
