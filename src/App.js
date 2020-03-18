import React from 'react';
import './App.css';
import MainPage from "./components/Online Shop Page/MainPage";
import {Link, Route} from "react-router-dom";
import Favourites from "./components/Online Shop Page/Favourites";
import Cart from "./components/Online Shop Page/Cart";
import './components/Online Shop Page/MainPage.scss';

const HomePage =()=> <MainPage url = {'ProductsArray.json'}/>;
const FavouritePage =()=> <Favourites/>;
const CartPage = () => <Cart/>;


function App() {
  return (
      <>
        <nav className={'nav-bar'}>
            <Link to={'/'}>Home</Link>
            <Link to={'/favourites'}><i className="fas fa-star"></i>Favourites</Link>
            <Link to={'/cart'}><i className="fas fa-shopping-cart"></i>Cart</Link>
        </nav>

          <Route path={'/'} component={HomePage} exact/>
          <Route path={'/favourites'} component={FavouritePage}/>
          <Route path={'/cart'} component={CartPage}/>

        </>

  );
}

export default App;
