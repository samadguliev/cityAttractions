import React from "react";
import {ConfirmPopup} from "./ConfirmPopup";
import {SuccessPopup} from "./SuccessPopup";

class Form extends React.Component {
    state = {
        name: '',
        email: '',
        text: '',
        agree: false,
        confirmPopup: false,
        successPopup: false,
    };
    onBtnClickHandler = (e) => {
        e.preventDefault();
        this.setState({ confirmPopup: true, })
    };
    onPopupCancel = (data) => {
        const { successPopup } = data;
        this.setState({ confirmPopup: false, successPopup });
    };
    onPopupConfirm = () => {
        this.setState({
            successPopup: false,
            name: '',
            email: '',
            text: '',
            agree: false,
        })
    };

    handleChange = (e) => {
        const { id, value } = e.currentTarget;
        this.setState({ [id]: value })
    };
    handleCheckboxChange = (e) => {
        this.setState({ agree: e.currentTarget.checked })
    };
    validate = () => {
        const { name, email, text, agree } = this.state;
        return !!(name.trim() && email.trim() && text.trim() && agree);

    };
    render() {
        const { name, email, text } = this.state;
        return (
            <div>
                {
                    this.state.confirmPopup &&
                    <ConfirmPopup
                        data={this.state}
                        onPopupCancel={this.onPopupCancel}
                    />

                }
                {
                    this.state.successPopup &&
                    <SuccessPopup
                        onPopupConfirm={this.onPopupConfirm}
                    />
                }
                <div className="form-container">
                    <p className="form-title">Есть пожелания или отзыв? Напишите нам об этом! ( ͡° ͜ʖ ͡°)</p>
                    <form className='add'>
                        <input
                            id='name'
                            type='text'
                            onChange={this.handleChange}
                            className='form-control'
                            placeholder='Ваше имя'
                            value={name}
                        />
                        <input
                            id='email'
                            type='text'
                            onChange={this.handleChange}
                            className='form-control'
                            placeholder='Ваш E-mail'
                            value={email}
                        />
                        <textarea
                            id='text'
                            onChange={this.handleChange}
                            className='form-control form-text'
                            placeholder='Текст новости'
                            cols="50"
                            rows="5"
                            value={text}
                        ></textarea>

                        <label className='form-checkbox'>
                            <input
                                type='checkbox' onChange={this.handleCheckboxChange}
                                checked={this.state.agree}
                            />
                                   Я не робот (ﾒ￣▽￣)︻┳═一
                        </label>
                        <button
                            className='form-btn form-submit'
                            onClick={this.onBtnClickHandler}
                            disabled={!this.validate()}>
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export { Form }