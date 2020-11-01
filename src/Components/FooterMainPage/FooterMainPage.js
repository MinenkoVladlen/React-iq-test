import React from 'react';

import './style/footerMainPage.css';

const FooterMainPage = () => (
    <footer className="footer_main_page">
        <div className="footer_row">
            <a href="https://www.instagram.com/vladlenminenko/"
            ><i className="fab fa-instagram"></i
            ></a>
            <a href="https://www.linkedin.com/in/minenkovladlen/"
            ><i className="fab fa-linkedin"></i
            ></a>
            <a href="mailto:minenkovladlen@gmail.com"
            ><i className="fas fa-envelope"></i
            ></a>
        </div>
        <div className="footer_row">
            <a href="about/about.html">О нас</a>
            <a href="instruction/instruction.html">Инструкция</a>
            <a href="result/result.html">Результаты</a>
        </div>
        <div className="footer_row">
            <a href="http://minenkovladlen.com.ua/My_work.html">Больше работ</a>
            <a href="https://undraw.co/illustrations">Иллюстрации</a>
            <a href="#">Вернутся на верх</a>
        </div>
    </footer>
)

export default FooterMainPage;