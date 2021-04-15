import React, {Component} from 'react';
import List from "./List";

class Input extends Component {

    state = {
        item: '',
        disable: true
    };

    onChangeInput = (e) => {
        console.log(e.target.value);
        if (!e.target.value.trim()) {
            this.setState({
                disable: true,
                [e.target.name]: e.target.value
            })
        } else {
            this.setState({
                disable: false,
                [e.target.name]: e.target.value

            })
        }

        console.log(this.state.disable);
    };
    onSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({
            item: '',
            disable: true
        })
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name='item'
                    placeholder="input new item"
                    onChange={this.onChangeInput}
                    value={this.state.item}
                />
                <div>
                    <button disabled={this.state.disable} type='submit'>Add Item</button>
                </div>
            </form>
        )
    }
}

export default Input