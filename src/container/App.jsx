import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Carrusel from '../components/Carrusel';
import Footer from '../components/Footer';




const App= () =>{
    return (

        <div className="App">
            <Header/>
            <Search/>
            <Carrusel/>
            <Footer/>
        </div>
    );

}

export default App;


