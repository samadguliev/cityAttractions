import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar_container">
                <div className="sidebar">
                    <h2>Рейтинг посещаемых мест</h2>
                    <ul>
                        <li><a href="/list/arrow/">Ярославская стрелка</a><span className="rating_sidebar">8.1</span></li>
                        <li><a href="/list/promenade/">Набережная Волги в Ярославле</a><span className="rating_sidebar">8.0</span></li>
                        <li><a href="/list/church/">Церковь Ильи Пророка</a><span className="rating_sidebar">7.5</span></li>
                        <li><a href="/list/yaroslav/">Памятник Ярославу Мудрому</a><span className="rating_sidebar">7.4</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;