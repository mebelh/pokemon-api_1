import React from "react"
import {connect} from "react-redux";
import Card from "./Card";

function Bookmarks({bookmarks}) {
   const cards = bookmarks.map(({name, id, imgUrl}) => <Card id={id} name={name} imgUrl={imgUrl} favorite={true} key={'' + name + id}/>)

   return (
      <div>
         {cards.length ? cards :
            <div style={{
               textAlign: 'center',
               margin: '50px 0 20px',
               fontSize: '30px'
            }}>
               <p>Ничего не найдено... :(</p>
            </div>
         }
      </div>
   )
}

const mapStateToProps = ({bookmarks}) => ({
   bookmarks: bookmarks.cards
})

export default connect(mapStateToProps, null)(Bookmarks)