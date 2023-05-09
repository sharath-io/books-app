import { useContext } from "react"
import { FavoritesContext } from "../index";

export function Favorites(){
    const {favorites,removeFromFav} = useContext(FavoritesContext)
    return (
        <div>
            <h1>favorites</h1>
            <ul className="book-list" style={{listStyleType: 'none'}}>
                {
                    favorites.map(({id,image,title,author}) =><li key={id} className="book-card">
                        <img src={image} alt={title}/>
                        <p>Title : {title}</p>
                        <p>Author: {author}</p>   
                        <p><button onClick={()=> removeFromFav(id)}>remove From fav</button></p>
                        </li>)
                }
            </ul>
        </div>
    )
}