import React, {Component} from 'react';
import './App.css';

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

class App extends Component {

    state = {
        items: []
    };

    addItem = (item) => {
        this.setState({
            items: [...this.state.items, item]
        })
    };

    onDelete = (idx) => {
        console.log(idx);
        this.setState({
            items: [...this.state.items.splice(0, idx), ...this.state.items.splice(idx + 1)]
        })
    };

    render() {
        return (
            <div>
                <Input addItem={this.addItem}/>
                <Counter counter={this.state.items.length}/>
                <List items={this.state.items} onDelete={this.onDelete}/>
            </div>
        )
    }

}

export default App;

const Item = ({item, onDelete}) => {

    return <div>
        {item}
        <button onClick={onDelete}>Delete</button>
    </div>
};

const Counter = ({counter}) => {
if(!counter) return null
    return <div>
        {`totalItems - ${counter}`}
    </div>
};


class List extends Component {

    render() {
        return (
            <div className="App">
                {this.props.items.length === 0 ? 'No items added' : this.props.items.map((item, idx) => {
                    return <Item key={idx} item={item} onDelete={() => this.props.onDelete(idx)}/>
                })}
            </div>
        )
    }
}
