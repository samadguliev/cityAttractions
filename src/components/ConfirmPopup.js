import React from "react";

class ConfirmPopup extends React.Component {
    state = {
        name: '',
        email: '',
        text: '',
        successPopup: {
            confirm: true,
            close: false,
        }
    };

    onBtnClickHandler = (e) => {
        e.preventDefault();
        const { id } = e.currentTarget;
        const success = this.state.successPopup[id];
        this.props.onPopupCancel({
            successPopup: success,
        })
    };

    render() {
        const { name, email } = this.props.data;
        return (
            <div className="popup confirm-popup">
                <div className="popup-content">
                    <p className="form-title">
                        Подтверждение формы
                    </p>
                    <p>Имя: {name} </p>
                    <p>Email: {email} </p>
                    <div className="popup-buttons">
                        <button
                            id="confirm"
                            className="form-btn form-submit"
                            onClick={this.onBtnClickHandler}>
                            Отправить
                        </button>
                        <button
                            id="close"
                            className="form-btn form-cancel"
                            onClick={this.onBtnClickHandler}>
                            Исправить
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export { ConfirmPopup }