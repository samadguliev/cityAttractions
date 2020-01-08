import React from 'react'
import Data from '../../public/data/data';

class ItemDetail extends React.Component {

    state = {
        item: []
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        let item = Data.filter(function (item) {
            return item.link === id;
        });

        this.setState({ item: item[0] });
        this.setDetailText(item[0]);
    };

    setDetailText = (item) => {
        let out = document.querySelector('.detail-text');
        out.innerHTML = item.text;
    };

    render() {
        const { name, previewImg } = this.state.item;
        return (
            <div className="content">
                <h1> {name} </h1>
                <div className="films_block">
                    <img src={process.env.PUBLIC_URL + previewImg} alt="" />
                </div>
                <div className="detail-text">
                </div>
            </div>
        )
    }
}

export { ItemDetail }