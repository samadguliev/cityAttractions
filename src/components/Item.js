import React from 'react'
// import PropTypes from 'prop-types' // у Article это react и prop-types

class Item extends React.Component {
    render() {
        const { name, title, link, previewImg } =  this.props.data;
        return (
            <div className="content">
                <h1>
                    <a href={ link + "/" }>{ name }</a>
                </h1>

                <div className="films_block">
                    <a href={ link + "/"  }>
                        <img src={process.env.PUBLIC_URL + previewImg} alt="" />
                    </a>
                </div>

                <div className="posts">
                    <h2>Описание</h2>
                    <div className="posts_content">
                        <p>{ title }</p>
                    </div>

                    <p>
                        <a href={ link + "/"  }>Читать</a>
                    </p>
                    <hr />
                </div>
            </div>
        )
    }
}
// Item.propTypes = {
//     data: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         author: PropTypes.string.isRequired,
//         text: PropTypes.string.isRequired,
//         bigText: PropTypes.string.isRequired
//     })
// };

export { Item }