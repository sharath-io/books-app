import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import { FavoritesContext } from '../index';

export function Header(){
    const {favorites} = useContext(FavoritesContext);
    return (
        <div>
            <h1>Books React App</h1>
            <nav>
              <NavLink to='/' className="nav-link">All Books </NavLink>
              <NavLink to='/favorites' className="nav-link">Favorites({favorites.length})</NavLink>
              <NavLink to='/read' className="nav-link">Read </NavLink>
              <NavLink to='/profile' className="nav-link">Profile </NavLink>
            </nav>
        </div>
    )
}