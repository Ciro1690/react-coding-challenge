import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import ItemList from './components/ItemList';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <div className="content-wrap">
      <BrowserRouter>
        <Nav />
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route exact path = "/Series">
          <ItemList type="series"/>
        </Route>
        <Route exact path = "/Movies">
          <ItemList type="movie" />
        </Route>
        <Footer/>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
