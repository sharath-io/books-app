import { useContext } from "react";
import { BookContext } from "../index";
export function Home(){
    const {booksData} = useContext(BookContext);
    return (
        <div>
            <h1>Home</h1>
            <ul className="book-list" style={{listStyleType: 'none'}}>
                {
                    booksData.map(({id,image,title,author,read}) =><li key={id} className="book-card">
                        <img src={image} alt={title}/>
                        <p>Title : {title}</p>
                        <p>Author: {author}</p>   
                        <p><button disabled={read}> {!read ? "Mark as Read" : 'Already Read' }</button> </p>
                        <p><button>Add to Fav</button></p>
                        </li>)
                }
            </ul>
        </div>
    )
}

// id: 6,
//                 title: 'Pride and Prejudice',
//                 author: 'Jane Austen',
//                 publisher: 'Penguin Classics',
//                 year: 1813,
//                 image:
//                   'https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg',
//                 price: 6.99,
//                 read: true,