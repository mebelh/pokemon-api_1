import {useState} from "react"

export default function useHttp(){
   const request = async (url) => {
      try{
         const response = await fetch(url)
         if(!response.ok){
            return {
               message: 'Что то пошло не так!'
            }
         }
         const data = await response.json()
         return data
      } catch (e) {
         throw e
      }
   }

   return {request}

}