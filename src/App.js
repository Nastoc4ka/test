import React, {Component} from 'react';
import Input from './Input'
import Counter from './Counter'
import List from './List'

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


