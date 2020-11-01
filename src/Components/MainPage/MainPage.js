import React from 'react';
import {Link} from "react-router-dom";
import './style/mainPage.css';
import data from '../../dataMainPage.json';
import './style/mainPage.css'

const MainPage = () => {

    const mainPageElem = data.map(item =>
        <section key={item.id} className={item.class_block}>
            <div className="main_container">
                <div className="main_description">
                    <h2>{item.title}</h2>
                    <p>
                        {item.description}
                    </p>
                    {item.button ? <div className="button">
                                         <Link to={{
                                             pathname: item.link,
                                             props: item.id
                                         }}>Начать</Link>
                                  </div>: ''}
                </div>
                <img src={item.url_img} alt="girl"/>
            </div>
        </section>
    )

    return(
        <>
            {mainPageElem}
        </>
    )
}


export default MainPage;

