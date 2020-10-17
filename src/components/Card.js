import React, {useState} from "react"
import MaterialIcon from "material-icons-react";
import useHttp from "../hooks/http.hook";

export default function Card({title = '', url = '', favorite = false}) {
   const {request} = useHttp()
   const [pokemonData, setPokemonData] = useState({})
   request(url).then(data => {
      setPokemonData({
         imgUrl: data['sprites']['back_default']
      })
   })
   return (
      <div className='card'>
         <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
         }}>
            {title}
            <img src={pokemonData.imgUrl} />
         </div>
         <MaterialIcon icon='bookmark' color={favorite ? 'tomato' : 'black'}/>
      </div>
   )
}