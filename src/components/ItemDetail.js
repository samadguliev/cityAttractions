import React from 'react'
import Data from '../../public/data/data';

class ItemDetail extends React.Component {

    state = {
        item: [],
        prevLink: '',
        nextLink: '',
        prevVisible: false,
        nextVisible: false,
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        const item = Data.find(element => element.link === id);

        this.setState({ item: item });
        this.setDetailText(item);
        this.getClosestElements(item.id);
    };

    setDetailText = (item) => {
        let out = document.querySelector('.detail-text');
        out.innerHTML = item.text;
    };

    getClosestElements = (id) => {
        let prevLink = '';
        let nextLink = '';
        if (id > 0) {
            prevLink = Data[id-1].link;
        }
        if (id < Data.length - 1) {
            nextLink = Data[id+1].link;
        }
        this.setState({
            prevLink,
            nextLink,
        })
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
                <div className="detail-nav-block">
                    {this.state.prevLink &&
                        <a href={"/list/" + this.state.prevLink + "/"}
                           className="detail-nav detail-nav-prev">
                            Назад
                        </a>
                    }

                    {this.state.nextLink &&
                        <a href={"/list/" + this.state.nextLink + "/"}
                           className="detail-nav detail-nav-next">
                            Вперед
                        </a>
                    }
                </div>
            </div>
        )
    }
}

export { ItemDetail }