import React from "react"
import MaterialIcon from "material-icons-react";

export default function SearchPanel(){
   return (
      <div className='searchPanel'>
         <MaterialIcon icon='search'/>
         <input type="text" placeholder='Найти...'/>
         <button className='btn'>Найти</button>
      </div>
   )
}