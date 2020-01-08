import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>
                    <a href="/">Главная   </a> |
                    <a href="/list/">   Достопримечательности</a>
                </p>
            </div>
        )
    }
}

export default Footer;