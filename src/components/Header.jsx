import React from 'react';

import '../assets/style/Header.scss';

import img from '../assets/static/user-icon.png'

const Header= () =>{
    return (
        <div className="header">
              <header class="header">
    <img class="header__img"  alt="vICTOR Video" />
    <div class="header__menu">
      <div class="header__menu--profile">
        <img src={img} alt=""/>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
        </div>        
    );

}

export default Header;