import React from "react";
import { Item } from './Item'

class List extends React.Component {

    renderNews = () => {
        let newsTemplate = [];
        const { list } = this.props;

        newsTemplate = list.map(function(item) {
            return <Item key={item.id} data={item}/>
        });

        return newsTemplate
    };

    render() {
        return (
            <div className='news'>
                {this.renderNews()}
            </div>
        );
    }
}

export { List }