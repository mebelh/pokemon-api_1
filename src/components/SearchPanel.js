import React, {useState} from "react"
import MaterialIcon from "material-icons-react";
import {useDispatch} from "react-redux";
import {changeSearchFilter} from "../Redux/actions";

export default function SearchPanel(){
   const [input, setInput] = useState('')
   const dispatch = useDispatch()
   const submitHandler = (event) => {
      event.preventDefault()
      dispatch(changeSearchFilter(input))
   }
   const changeInputHandler = (e) => {
      e.persist()
      setInput(e.target.value)
   }
   return (
      <form className='searchPanel' onSubmit={submitHandler}>
         <MaterialIcon icon='search'/>
         <input type="text" name='filter' onChange={changeInputHandler} placeholder='Найти...'/>
         <button className='btn' type={"submit"}>Найти</button>
      </form>
   )
}