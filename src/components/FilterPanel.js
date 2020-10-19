import React from "react"
import {Link} from "react-router-dom"
import {connect, useDispatch} from "react-redux";
import {changeFilter} from "../Redux/actions";

function FilterPanel({filter}) {
   const dispatch = useDispatch()
   const setFilterHandler = (value) => {
      dispatch(changeFilter(value))
   }

   return (
      <div className='filterPanel'>
         <Link
            to='/'
            onClick={() => {
               setFilterHandler('search results')
            }}
         >
            <div className={'filterPanel__item' + (filter === 'search results' ? ' active' : '')}>
               Результаты поиска
            </div>
         </Link>

         <Link
            to='/bookmarks'
            onClick={() => {
               setFilterHandler('bookmarks')
            }}
         >
            <div className={'filterPanel__item' + (filter === 'bookmarks' ? ' active' : '')}>
               Закладки
            </div>

         </Link>
      </div>
   )
}

const mapStateToProps = ({filter}) => ({
   filter: filter.active
})

export default connect(mapStateToProps, null)(FilterPanel)

