import React from "react"
import {useDispatch} from "react-redux"
import {addBookmark, deleteBookmark} from "../Redux/actions";
import {capitalize} from "../utils/capitalize";

export default function Card({name = '', imgUrl = '', id, favorite}) {
   const dispatch = useDispatch()
   const toggleBookmarkHandler = () => {
      dispatch(favorite ? deleteBookmark(id) : addBookmark(id, {name, id, imgUrl}))
   }
   const color = favorite ? 'tomato' : 'black'
   return (
      <div className='card'>
         <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
         }}>
            {capitalize(name)}
            <img src={imgUrl}/>
         </div>
         <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
         }}>
            <span onClick={toggleBookmarkHandler}>
               <i className='material-icons md-24 md-dark' style={{color: color}}>bookmark</i>
            </span>
            <span style={{marginTop: '30px'}}>pokemon Id: {id}</span>
         </div>
      </div>
   )
}
