import {useState, useEffect, createContext} from 'react';
import {fakeFetch} from  '../api/fakeFetch';
export const BookContext = createContext();

export function BookProvider({children}){
    const [booksData, setBooksData] = useState([]);
    const [profileData, setProfileData] = useState({});

    const getData = async () =>{
        try{
            const {status,data} = await fakeFetch('https://example.com/api/books');
            if(status === 200){
                setBooksData(data.books);
                setProfileData(data.user);
            }
                  
        }catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
     getData();
    },[]);

return (
    <BookContext.Provider value={{booksData, profileData}}>
      {children}
    </BookContext.Provider>
)
}