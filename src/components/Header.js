import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import { FavoritesContext, ReadContext,BookContext } from '../index';

export function Header(){
    const {favorites} = useContext(FavoritesContext);
    const {readList} = useContext(ReadContext);
    return (
        <div>
            <h1>Books React App</h1>
            <nav>
              <NavLink to='/' className="nav-link">All Books </NavLink>
              <NavLink to='/favorites' className="nav-link">Favorites({favorites.length})</NavLink>
              <NavLink to='/read' className="nav-link">Read ({readList.length})</NavLink>
              <NavLink to='/profile' className="nav-link">Profile </NavLink>
            </nav>
        </div>
    )
}