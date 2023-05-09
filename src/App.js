import {Routes, Route} from 'react-router-dom';
import './App.css';
import {Home,Read,Profile,Favorites} from './pages'
import {Header} from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
