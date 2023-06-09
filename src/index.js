import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { BookContext,BookProvider } from './contexts/bookContext';
import { FavoritesProvider, FavoritesContext } from './contexts/favoritesContext';
import { ReadProvider,ReadContext } from './contexts/readContext';


export {BookContext, FavoritesContext,ReadContext};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <BookProvider>
        <FavoritesProvider>
          <ReadProvider>
            <App />
          </ReadProvider>
        </FavoritesProvider>
      </BookProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
