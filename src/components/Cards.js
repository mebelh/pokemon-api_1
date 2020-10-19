import React from "react"
import {connect, useDispatch} from 'react-redux'
import Card from "./Card";
import {fetchCards} from "../Redux/actions";

function Cards({showCards, bookmarks, cards, loading}) {
   const dispatch = useDispatch()

   const cardsComponents = showCards.length && cards.length ?
      showCards.map(
         card => <Card
            key={'' + card.id + card.name}
            name={card.name}
            id={card.id}
            imgUrl={card.imgUrl}
            favorite={bookmarks['ids'].includes(card.id)}
         />
      ) :
      !loading && <div style={{
         textAlign: 'center',
         margin: '50px 0 20px',
         fontSize: '30px'
      }}>
         <p>Ничего не найдено... :(</p>
      </div>

   const fetchData = () => {
      dispatch(fetchCards(cards.length))
   }
   return (
      <div>
         {cardsComponents}
         <div className='center-all mt-sm mb-sm'>
            <button className='btn' onClick={fetchData}>Загрузить еще...</button>
         </div>
      </div>
   )
}

const mapStateToProps = ({cards, bookmarks, loading}) => ({
   cards: cards.cards,
   showCards: cards.showCards,
   bookmarks,
   loading: loading.loading
})


export default connect(mapStateToProps, null)(Cards)