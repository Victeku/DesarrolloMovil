
import React from 'react';
import '../assets/style/Search.scss';

const Search = () =>{
    return(
        <div className="Search">
              <section class="input">
    <h2 class="main__title">¿Qué quieres ver hoy?</h2>
    <input type="text" class="input" placeholder="Buscar..." />
  </section>
        </div>
    );
};

export default Search;