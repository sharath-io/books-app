import {useState, createContext, useContext} from 'react';
import { BookContext } from './bookContext';

export const FavoritesContext = createContext();

export function FavoritesProvider({children}){
  const {booksData} = useContext(BookContext);
   const [favorites, setFavorites] = useState([]);

   const addToFav  =(id) =>{
    const selectedBook = booksData.find(book => book.id === Number(id));
    setFavorites([...favorites, selectedBook]);
   } 

   const removeFromFav = (id) =>{
    setFavorites(favorites.filter(book => book.id!==id));
   }


return (
    <FavoritesContext.Provider value={{favorites, addToFav,removeFromFav}}>
      {children}
    </FavoritesContext.Provider>
)
}