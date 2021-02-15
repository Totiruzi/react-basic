import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

class App extends React.Component {
    state = {
        writers: [],
        foundWriter: ''
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then(users => this.setState({writers: users}))
    }

    handleChange = (e) => { this.setState({foundWriter: e.target.value})}

    render() {
        const { writers, foundWriter } = this.state;
        const filteredWriters = writers.filter(writer => writer.name.toLowerCase().includes(foundWriter.toLowerCase()));
        return (
            <div className='App'>
                <h1>Dancing Pen</h1>
                <SearchBox
                    placeholder= 'Search Writers'
                    handleChange={this.handleChange}
                />
                <CardList writers={filteredWriters} />
            </div>
        )
    }
}

export default App;
