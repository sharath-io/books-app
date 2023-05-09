import { useContext } from "react"
import { ReadContext } from "../index";

export function Read(){
    const {readList,removeFromRead} = useContext(ReadContext);
    console.log(readList);
    return (
        <div>
            <h1>Read</h1>
            <ul className="book-list" style={{listStyleType: 'none'}}>
                {
                    readList.map(({id,image,title,author}) =><li key={id} className="book-card">
                        <img src={image} alt={title}/>
                        <p>Title : {title}</p>
                        <p>Author: {author}</p>   
                        <p><button onClick={()=> removeFromRead(id)}>remove From Read</button></p>
                        </li>)
                }
            </ul>
        </div>
    )
}