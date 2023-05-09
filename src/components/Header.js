import {NavLink} from 'react-router-dom';

export function Header(){
    return (
        <div>
            <h1>Books React App</h1>
            <nav>
              <NavLink to='/'>Home || </NavLink>
              <NavLink to='/favorites'>Favorites || </NavLink>
              <NavLink to='/read'>Read || </NavLink>
              <NavLink to='/profile'>Profile || </NavLink>
            </nav>
        </div>
    )
}