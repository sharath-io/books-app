import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookContext, FavoritesContext } from "../index";
export function Home(){
    const {booksData} = useContext(BookContext);
    const {favorites,addToFav} = useContext(FavoritesContext);
    return (
        <div>
            <h1>Home</h1>
            <ul className="book-list" style={{listStyleType: 'none'}}>
                {
                    booksData.map((book) =><li key={book.id} className="book-card">
                        <img src={book.image} alt={book.title}/>
                        <p>Title : {book.title}</p>
                        <p>Author: {book.author}</p>   
                        <p><button disabled={book.read}> {!book.read ? "Mark as Read" : 'Already Read' }</button> </p>

                        <p>
                            {
                            favorites.includes(book) ? <NavLink to="/favorites"><button>Go to Fav</button></NavLink> : <button onClick={()=> addToFav(book.id)}>Add to Fav</button>
                            }
                        </p>
                        </li>)
                }
            </ul>
        </div>
    )
}