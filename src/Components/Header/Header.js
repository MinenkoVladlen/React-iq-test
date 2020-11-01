import React from 'react';
import './style/header.css'
import {Link} from "react-router-dom";

const Header = () => (
    <header>
        <Link to="/">Главная</Link>
        <Link to='/page/instruction'>Инструкция</Link>
        <a href="#">О нас</a>
        <a href="#">Результаты</a>
    </header>
)

export default Header;

