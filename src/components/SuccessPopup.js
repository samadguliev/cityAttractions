import React from "react";

class SuccessPopup extends React.Component {

    state = {
      asd: 'asd'
    };

    onBtnClickHandler = (e) => {
        e.preventDefault();
        this.props.onPopupConfirm()
    };

    render() {
        return (
            <div className="popup confirm-popup">
                <div className="popup-content">
                    <p className="form-title">
                        Сообщение отправлено
                    </p>
                    <button className="popup-close" onClick={this.onBtnClickHandler}>
                        &#10006;
                    </button>
                </div>
            </div>
        )
    }
}

export { SuccessPopup }