import React from "react";

class Form extends React.Component {
    state = {
        name: '',
        email: '',
        text: '',
        agree: false,
    };
    onBtnClickHandler = (e) => {
        e.preventDefault();
        alert("Message Sent.");
        this.setState({
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
                        <input type='checkbox' onChange={this.handleCheckboxChange} /> Я не робот (ﾒ￣▽￣)︻┳═一
                    </label>
                    <button
                        className='form-submit'
                        onClick={this.onBtnClickHandler}
                        disabled={!this.validate()}>
                        Отправить
                    </button>
                </form>
            </div>
        )
    }
}

export { Form }