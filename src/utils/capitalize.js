export function capitalize(text){
   if(typeof text === 'string'){
      return text[0].toUpperCase() + text.slice(1).toLowerCase()
   }
   return text
}