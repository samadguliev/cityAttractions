import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <div className="logo_text">
                        <h1><a href="/">Ярославль</a></h1>
                        <h2>Путеводитель по Ярославлю</h2>
                    </div>
                </div>

                <div className="menubar">
                    <ul className="menu">
                        <li className="selected"><a href="/">Главная</a></li>
                        <li><a href="/list/">Достопримечательности</a></li>
                        <li><a href="/contacts/">Контакты</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;