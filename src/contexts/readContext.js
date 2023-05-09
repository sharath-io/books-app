import {useState, createContext, useContext} from 'react';
import { BookContext } from '../index';


export const ReadContext = createContext();

export function ReadProvider({children}){
    const {booksData} = useContext(BookContext)
    const [readList, setReadList] = useState([]);

    const markAsRead = (id) =>{
      const selectedBook = booksData.find(book => book.id === Number(id) );
      selectedBook.read = true;
      setReadList([...readList, selectedBook]);
    }

    const removeFromRead = (id) =>{
        const selectedBook = booksData.find(book => book.id === Number(id) );
        selectedBook.read = false;
        setReadList(readList.filter(book => book.id!==id));
       }

return (
    <ReadContext.Provider value={{readList,markAsRead,removeFromRead}}>
      {children}
    </ReadContext.Provider>
)
}