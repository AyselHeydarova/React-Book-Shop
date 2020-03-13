import React from 'react';
import './App.css';
import MainPage from "./components/Online Shop Page/MainPage";



function App() {
  return (
      <>
        {/*<ModalWindowManager/>*/}
        <MainPage url={'ProductsArray.json'}/>
        </>
  );
}

export default App;
