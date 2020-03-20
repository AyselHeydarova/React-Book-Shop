import React from 'react';
import './App.css';
import MainPage from "./components/Online Shop Page/MainPage";
import './components/Online Shop Page/MainPage.scss';
import {Link, Route} from "react-router-dom";
import Favourites from "./components/Online Shop Page/Favourites";
import Cart from "./components/Online Shop Page/Cart";


const HomePage =()=> <MainPage url = {'ProductsArray.json'}/>;
const FavPage = () => <Favourites/>;
const CartPage = () => <Cart/>;


function App() {

  return (
      <>


          <nav className={'nav-bar'}>
              <Link to={'/'}>Home</Link>
              <Link to={'/favourites'}><i className="fas fa-star"> </i>Favourites</Link>
              <Link to={'/cart'}><i className="fas fa-shopping-cart"> </i>Cart</Link>
          </nav>

          <Route path={'/'} component={HomePage} exact/>
          <Route path={'/favourites'} component={FavPage}/>
          <Route path={'/cart'} component={CartPage}/>

      </>

  );
}

export default App;
